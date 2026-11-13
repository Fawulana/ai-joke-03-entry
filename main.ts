// ai-joke-03 entry (Node, standard library only): writes one fixed one-liner
// about AI coding agents to entry.txt. No trailing newline: the judge reads
// exactly the bytes written, so the file holds only the joke itself.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'My agent refactored my code, and now git blame points at a model that no longer exists.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
