// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is the TikTok video: an original short vertical ad for
// make.fun, made with ffmpeg from make.fun's press pack and posted publicly
// from @robi_0612. This program does the one thing the gate needs: it hands
// the house the video's address by copying VIDEO.json from the repository
// root into the grader's output directory. Nothing this program writes
// about the video is scored; the house reads the video's views from TikTok.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const source = join(BOT_DIR, "VIDEO.json");
  const destination = join(OUTPUT_DIR, "VIDEO.json");
  try {
    copyFileSync(source, destination);
  } catch (err) {
    console.error(
      `VIDEO.json could not be copied from ${source} to ${destination}: ${(err as Error).message}`,
    );
    process.exit(1);
  }
}

main();
