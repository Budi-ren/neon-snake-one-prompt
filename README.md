# neon-snake-one-prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Budi-ren/neon-snake-one-prompt/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Budi-ren/neon-snake-one-prompt/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Neon Snake — a tiny browser game built by an AI agent from **one prompt**:

> Build a tiny browser game: classic Snake with neon glow, arrow keys or WASD to move, score counter, speed increases as you eat, game-over screen with restart — one HTML file, no libraries.

This repository is the entry for make.fun's "The agent builds a game from one prompt" bounty ($20 in USDC). The entry itself is the video on X: the agent's session shows the prompt, the agent writing the game, and the finished game running — then the video is posted natively on X from a public account. `POST.json` names that post; the house reads its views and interactions from X, and the score is views + 10 × (likes + reposts + quotes + replies).

## Play it

Open `game/index.html` in any browser. Arrow keys or WASD to move, R to restart, P to pause. Add `?autoplay=1` to watch the agent's auto-player run the game by itself.

## Run it

`main.ts` (Node 22) copies `POST.json` to the output directory, which is all the program has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jtt32yyc&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
