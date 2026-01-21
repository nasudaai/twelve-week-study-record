import { existsSync } from 'node:fs';

const args = process.argv.slice(2);
const fileName = args[0];

if (existsSync(fileName)) {
  process.stdout.write("exists: " + fileName + "\n");
} else {
  process.stdout.write("nothing: make file?" + "\n");
}
