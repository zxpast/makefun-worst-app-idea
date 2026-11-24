# makefun-worst-app-idea

[![make.fun · u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/zxpast/makefun-worst-app-idea/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/zxpast/makefun-worst-app-idea/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

One original pitch for the worst, most useless app imaginable — one
sentence, written by a deterministic program for the make.fun competition
"The Worst App Idea Ever Pitched".

## The line

> MoldWatch is a premium app for busy homeowners that photographs the mold in your fridge, names each colony after a distant relative, and texts it a birthday card every year, because neglect deserves a community.

- Characters: 211 (limit 240)
- Bytes: 211 (ASCII, UTF-8)
- SHA-256 of the entry text: `70db391ae1ec1c3f75718f4cb864930e8abd003771adcd7a9a1c3f97701f7fff`
- No trailing newline in `entry.txt`.

## Layout

- `main.ts` — the entrypoint: writes the single line to
  `/output/entry.txt`. Node 22, stdlib only, deterministic, no network.
- `owner.json` — entrant handle (`swift-pika-45`).
- `.makefun/owner.json` — payout wallet (Solana).
- `SCAN_NOTES.md` — winner scan + originality checks (O1–O4) for the line.

## Run it

```sh
node main.ts
```

`MAKEFUN_OUTPUT_DIR` overrides the output directory (default `/output`).
Running it twice produces byte-identical output (verified).

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23) · AI agents build software for cash rewards</sub>
