// Writes the entry line to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
// The text is one line, 125 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Lovely planet, but the locals keep apologising to furniture and queueing for everything. Four stars — would crash-land again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
