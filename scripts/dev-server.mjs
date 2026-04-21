import crypto from "node:crypto";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promises as fs } from "node:fs";
import { WebSocketServer, WebSocket } from "ws";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".wav": "audio/wav",
};

const rooms = new Map();
const sockets = new Map();

function randomId(prefix) {
  return `${prefix}-${crypto.randomBytes(4).toString("hex")}`;
}

function createRoomCode() {
  let code = "";
  do {
    code = crypto.randomBytes(3).toString("hex").slice(0, 5).toUpperCase();
  } while (rooms.has(code));
  return code;
}

function getSafeFilePath(requestUrl) {
  const requestPath = new URL(requestUrl, `http://localhost:${port}`).pathname;
  const cleanedPath = decodeURIComponent(requestPath).replace(/^\/+/, "") || "index.html";
  const resolvedPath = path.resolve(projectRoot, cleanedPath);
  const relativePath = path.relative(projectRoot, resolvedPath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return resolvedPath;
}

async function serveStaticFile(request, response) {
  try {
    const filePath = getSafeFilePath(request.url || "/");

    if (!filePath) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    let finalPath = filePath;
    const stats = await fs.stat(filePath).catch(() => null);

    if (stats?.isDirectory()) {
      finalPath = path.join(filePath, "index.html");
    }

    const body = await fs.readFile(finalPath);
    const extension = path.extname(finalPath).toLowerCase();
    const contentType = contentTypes[extension] || "application/octet-stream";

    response.writeHead(200, { "Content-Type": contentType });
    response.end(body);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Internal server error");
  }
}

function getNetworkUrls() {
  const networks = os.networkInterfaces();
  const urls = [];

  for (const addresses of Object.values(networks)) {
    for (const address of addresses || []) {
      if (address.family === "IPv4" && !address.internal) {
        urls.push(`http://${address.address}:${port}`);
      }
    }
  }

  return urls;
}

function send(socket, payload) {
  const actualSocket = socket && socket.socket ? socket.socket : socket;
  if (!actualSocket || actualSocket.readyState !== WebSocket.OPEN) {
    return;
  }

  actualSocket.send(JSON.stringify(payload));
}

function getRoomPayload(room) {
  return {
    code: room.code,
    started: room.started,
    hostMemberId: room.hostMemberId,
    members: room.members.map((member) => ({
      memberId: member.memberId,
      name: member.name,
      connected: member.connected,
      isSpectator: member.isSpectator,
      playerId: member.playerId || null,
    })),
  };
}

function broadcastRoomState(room) {
  const payload = { type: "room-state", room: getRoomPayload(room) };
  for (const member of room.members) {
    if (!member.clientId) {
      continue;
    }
    send(sockets.get(member.clientId), payload);
  }
}

function removeClientFromRoom(clientId, reason = "left") {
  const socketRecord = sockets.get(clientId);
  if (!socketRecord || !socketRecord.roomCode) {
    return;
  }

  const room = rooms.get(socketRecord.roomCode);
  if (!room) {
    return;
  }

  if (room.hostClientId === clientId) {
    for (const member of room.members) {
      if (member.clientId === clientId) {
        continue;
      }
      send(sockets.get(member.clientId), {
        type: "room-closed",
        roomCode: room.code,
        reason: "The host disconnected, so the live room closed.",
      });
    }
    rooms.delete(room.code);
    return;
  }

  const memberIndex = room.members.findIndex((member) => member.clientId === clientId);
  if (memberIndex === -1) {
    return;
  }

  const member = room.members[memberIndex];
  if (room.started && !member.isSpectator) {
    member.connected = false;
    member.clientId = null;
  } else {
    room.members.splice(memberIndex, 1);
  }

  broadcastRoomState(room);

  if (!room.members.length) {
    rooms.delete(room.code);
  }
}

function handleCreateRoom(socket, message) {
  const name = String(message.name || "").trim().slice(0, 18) || "Player 1";
  const roomCode = createRoomCode();
  const memberId = randomId("member");
  const clientId = socket.clientId;
  const room = {
    code: roomCode,
    hostClientId: clientId,
    hostMemberId: memberId,
    started: false,
    lastSnapshot: null,
    members: [
      {
        memberId,
        clientId,
        name,
        connected: true,
        isSpectator: false,
        playerId: null,
      },
    ],
  };

  rooms.set(roomCode, room);
  sockets.get(clientId).roomCode = roomCode;
  sockets.get(clientId).memberId = memberId;

  send(socket, {
    type: "room-joined",
    room: getRoomPayload(room),
    memberId,
    isHost: true,
  });
}

function handleJoinRoom(socket, message) {
  const roomCode = String(message.roomCode || "").trim().toUpperCase();
  const name = String(message.name || "").trim().slice(0, 18) || "Player";
  const room = rooms.get(roomCode);

  if (!room) {
    send(socket, { type: "server-error", message: "That room code does not exist." });
    return;
  }

  const activeHumanCount = room.members.filter((member) => !member.isSpectator).length;
  const isSpectator = room.started || activeHumanCount >= 4;

  if (!room.started && activeHumanCount >= 4) {
    send(socket, { type: "server-error", message: "That room is already full." });
    return;
  }

  const memberId = randomId("member");
  room.members.push({
    memberId,
    clientId: socket.clientId,
    name,
    connected: true,
    isSpectator,
    playerId: null,
  });

  sockets.get(socket.clientId).roomCode = roomCode;
  sockets.get(socket.clientId).memberId = memberId;

  send(socket, {
    type: "room-joined",
    room: getRoomPayload(room),
    memberId,
    isHost: false,
  });

  broadcastRoomState(room);

  if (room.lastSnapshot) {
    send(socket, {
      type: "state-snapshot",
      snapshot: room.lastSnapshot,
    });
  }
}

function handleStartGame(socket, message) {
  const socketRecord = sockets.get(socket.clientId);
  if (!socketRecord?.roomCode) {
    return;
  }

  const room = rooms.get(socketRecord.roomCode);
  if (!room || room.hostClientId !== socket.clientId) {
    return;
  }

  const assignments = Array.isArray(message.assignments) ? message.assignments : [];
  const playerIdByMemberId = new Map(assignments.map((assignment) => [assignment.memberId, assignment.playerId]));

  room.started = true;
  room.members = room.members.map((member) => ({
    ...member,
    playerId: playerIdByMemberId.get(member.memberId) || null,
  }));

  broadcastRoomState(room);
}

function handleHostSnapshot(socket, message) {
  const socketRecord = sockets.get(socket.clientId);
  if (!socketRecord?.roomCode) {
    return;
  }

  const room = rooms.get(socketRecord.roomCode);
  if (!room || room.hostClientId !== socket.clientId) {
    return;
  }

  room.lastSnapshot = message.snapshot;

  for (const member of room.members) {
    if (!member.clientId || member.clientId === socket.clientId) {
      continue;
    }
    send(sockets.get(member.clientId), {
      type: "state-snapshot",
      snapshot: message.snapshot,
    });
  }
}

function handlePlayerAction(socket, message) {
  const socketRecord = sockets.get(socket.clientId);
  if (!socketRecord?.roomCode) {
    return;
  }

  const room = rooms.get(socketRecord.roomCode);
  if (!room || room.hostClientId === socket.clientId) {
    return;
  }

  send(sockets.get(room.hostClientId), {
    type: "player-action",
    memberId: socketRecord.memberId,
    action: message.action,
  });
}

function handleLeaveRoom(socket) {
  removeClientFromRoom(socket.clientId, "left");
  const socketRecord = sockets.get(socket.clientId);
  if (socketRecord) {
    socketRecord.roomCode = null;
    socketRecord.memberId = null;
  }
}

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  void serveStaticFile(request, response);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
  socket.clientId = randomId("client");
  sockets.set(socket.clientId, {
    socket,
    roomCode: null,
    memberId: null,
  });

  socket.on("message", (rawMessage) => {
    let message = null;

    try {
      message = JSON.parse(String(rawMessage));
    } catch (error) {
      send(socket, { type: "server-error", message: "Invalid message payload." });
      return;
    }

    switch (message.type) {
      case "create-room":
        handleCreateRoom(socket, message);
        break;
      case "join-room":
        handleJoinRoom(socket, message);
        break;
      case "start-game":
        handleStartGame(socket, message);
        break;
      case "host-snapshot":
        handleHostSnapshot(socket, message);
        break;
      case "player-action":
        handlePlayerAction(socket, message);
        break;
      case "leave-room":
        handleLeaveRoom(socket);
        break;
      default:
        send(socket, { type: "server-error", message: "Unknown message type." });
        break;
    }
  });

  socket.on("close", () => {
    removeClientFromRoom(socket.clientId, "disconnect");
    sockets.delete(socket.clientId);
  });
});

server.listen(port, host, () => {
  console.log(`Credit Climb live server is running at http://localhost:${port}`);

  const networkUrls = getNetworkUrls();
  if (networkUrls.length) {
    console.log("Available on your network:");
    for (const url of networkUrls) {
      console.log(`  ${url}`);
    }
  }

  console.log("Press Ctrl+C to stop the server.");
});
