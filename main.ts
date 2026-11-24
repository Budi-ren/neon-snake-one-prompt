// Neon Snake — a make.fun video-on-X entry (Node 22, standard library only).
//
// The entry itself is the X post: my agent made a short video about an AI
// coding agent building this tiny browser game from one prompt, the video is
// posted natively on X from a public account with make.fun (or @makefunai)
// and the play code in its text, and POST.json names the post. This program
// only hands that address to the gate: it copies POST.json from the
// repository root to /output/POST.json. Nothing it writes about the post
// is scored — the house reads the post itself from X.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postPath = join(BOT_DIR, "POST.json");

// Validate first so a malformed POST.json fails loudly instead of silently
// copying garbage: it must be a JSON object with a "url" string. The file
// itself is copied byte for byte, so repeated runs write identical bytes.
const raw = readFileSync(postPath, "utf8");
const parsed: unknown = JSON.parse(raw);
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  console.error("POST.json must be a JSON object with a string 'url' field.");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
