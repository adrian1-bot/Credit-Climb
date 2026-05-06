# Credit Climb

A browser-based multiplayer board game teaching credit scores, debt management, 
and the slow climb to financial stability. Built as a partner project for 
**WED ED 315 — Gamifying Learning** at Boston University.

🎮 **Play live:** https://credit-climb-live.onrender.com/

## What it teaches

Players roll dice, manage income against bills, decide between predatory and 
prudent financial choices (housing, transportation, loans, savings), and 
race toward Financial Freedom — a credit score above 750, stable housing, 
manageable debt, and emergency savings. The game embeds real consumer-finance 
mechanics (utilization rates, late payments, predatory lending traps) into 
a turn-based competition.

## Design philosophy

The course brief asked for a learning experience that *felt* like a game 
rather than a worksheet pretending to be one. Credit Climb leans into 
this by making bad financial decisions tactically tempting in the short term 
(a high-rate loan really does let you reach a milestone faster) while 
penalizing them through the credit score and long-term wealth mechanics.

## Run It Locally

1. Open a terminal in this folder.
2. Run `npm install`.
3. Run `npm start`.
4. Open one of the printed URLs in your browser.

The live server prints both a localhost URL and any available LAN URLs, so people on the same Wi-Fi network can join the same room without any extra setup.

## Live Multiplayer

1. The host opens the app and clicks `Create Room`.
2. Everyone else opens the same app URL, enters the room code, and clicks `Join Room`.
3. The host clicks `Start Live Game`.
4. Each player takes their own turn from their own browser.

The host is the authoritative session owner, so if a player disconnects the host can still keep the game moving.

## Deploy For A Public Link

Live multiplayer needs a Node host that supports WebSockets. GitHub Pages alone is **not** enough for live rooms.

### Render

This folder includes `render.yaml`, so Render can deploy it as a web service.

1. Push this folder to a GitHub repository.
2. Create a new Render web service from that repo.
3. Let Render use the included `render.yaml`, or set:
   - Build command: `npm install`
   - Start command: `npm start`
4. After deploy, share the Render URL and let players create/join rooms there.

### Other Node Hosts

Railway, Fly.io, and similar Node-friendly hosts should also work as long as they support WebSockets and run `npm start`.

## Static Preview

The existing `.github/workflows/deploy-pages.yml` workflow can still publish a static browser copy for solo or hot-seat play, but that static deployment will not support live rooms.

## How To Play

- Enter your name.
- Use `Create Room` or `Join Room` for live multiplayer, or stay in local mode for hot-seat play.
- Choose how many AI rivals you want.
- Click `Start Live Game` or `Deal the Board`.
- On your turn, click `Roll Dice`.
- Land on spaces to make financial choices about credit, housing, transportation, savings, loans, and growth.
- Reach `Financial Freedom` before the other players or AI rivals.

The center of the board acts as the shared table feed, so everyone can follow the latest landing, decision, and setback.

## Win Conditions

You win when you complete all of these:

- `Stability`: stable housing and at least `$500` in emergency savings
- `Mobility`: transportation that is not a debt trap
- `Growth`: at least one wealth-building asset
- `Security`: `750+` credit score and at least one crisis survived without missing a payment
- `Savings Goal`: `+$4,000` in combined cash and emergency savings
- `Debt Under Control`: `-$4,000` or less total debt

## Design Notes

The implementation makes a few concrete rules from the PDF so the game is fully playable:

- each turn includes income, bill payments, credit updates, and a dice roll
- higher credit unlocks stronger housing, vehicle, and growth options
- predatory loans and bad transport deals can block your progress
- missions reward healthy financial behavior like low utilization and on-time payments
