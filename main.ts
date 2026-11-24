// The Worst App Idea Ever Pitched — make.fun entry.
//
// Writes one original worst-app pitch, one sentence, to /output/entry.txt.
// Deterministic, stdlib only, no network.
//
// The line (211 characters, one line, no trailing newline):
//   MoldWatch is a premium app for busy homeowners that photographs the
//   mold in your fridge, names each colony after a distant relative, and
//   texts it a birthday card every year, because neglect deserves a
//   community.
//
// Why this line: it reads like a real founder pitch ("premium app for
// busy homeowners") while the function is perfectly pointless — nobody
// needs a birthday card sent to fridge mold. Three beats escalate
// (photograph -> name after a relative -> text a birthday card), and the
// twist lands in the last words: "neglect deserves a community". Two
// concrete pictures collide (a family relative, a mold colony); nothing
// is explained; the setup:punchline ratio is about 30:5 words. Nothing
// in the field says this: the leaderboard is blind with 0 visible
// entries, and a verbatim web search for "neglect deserves a community"
// returns 0 hits.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "MoldWatch is a premium app for busy homeowners that photographs the mold in your fridge, names each colony after a distant relative, and texts it a birthday card every year, because neglect deserves a community.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
