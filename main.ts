// Passport page entry for make.fun competition
// the-passport-page-of-a-countr-2-20261121-0318.
//
// The entry is one image: an invented passport spread for the Republic of
// Vellor — a high-altitude plateau country that does not exist. Holder Mira
// Solenne, licensed cloud shepherd; crossings by Kestrel Cableway only.
// The holder portrait is an AI-generated photorealistic photo of a fictional
// person (no real person). The spread itself is rendered deterministically
// from passport.html (same directory) with Playwright; entry.png is the
// rendered output, byte-identical across runs.
//
// This program copies entry.png to /output/entry.png, where the gate reads it.
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));
