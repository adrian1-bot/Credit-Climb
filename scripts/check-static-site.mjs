import path from "node:path";
import { fileURLToPath } from "node:url";
import { promises as fs } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const requiredFiles = [
  "index.html",
  "styles.css",
  "game.js",
  "background-music.mp3",
  "scripts/dev-server.mjs",
];

async function ensureFileExists(relativePath) {
  await fs.access(path.join(projectRoot, relativePath));
}

async function main() {
  await Promise.all(requiredFiles.map((file) => ensureFileExists(file)));

  const indexHtml = await fs.readFile(path.join(projectRoot, "index.html"), "utf8");
  const gameScript = await fs.readFile(path.join(projectRoot, "game.js"), "utf8");

  const requiredHtmlRefs = ["./styles.css", "./game.js"];
  for (const reference of requiredHtmlRefs) {
    if (!indexHtml.includes(reference)) {
      throw new Error(`Missing HTML reference: ${reference}`);
    }
  }

  if (!gameScript.includes('const BACKGROUND_MUSIC_PATH = "./background-music.mp3";')) {
    throw new Error("Background music path is not pointing at the local static asset.");
  }

  console.log("Static site check passed. Credit Climb is ready for the live server and multiplayer deployment.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
