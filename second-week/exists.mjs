import { existsSync } from 'node:fs';

const args = process.argv.slice(2);

if (existsSync("out/sample.md")) {
  process.stdout.write("exists: ~file" + "\n");
} else {
  process.stdout.write("nothing: make file?" + "\n");
}
