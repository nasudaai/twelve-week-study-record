import { existsSync } from 'node:fs';

if (existsSync("out/sample.md")) {
  process.stdout.write("exists: ~file" + "\n");
} else {
  process.stdout.write("nothing: make file?" + "\n");
}
