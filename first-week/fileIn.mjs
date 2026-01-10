import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const file = args[0];

const data = readFileSync(file, "utf-8");

//out process
function write(data) {
  process.stdout.write(data + "\n")
}
//process.stdout.write(file + "\n");
//process.stdout.write(data + "\n");

write(file);
write(data);
