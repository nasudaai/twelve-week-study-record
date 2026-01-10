import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const file = args[0];

const data = readFileSync(file, "utf-8");

process.stdout.write(file + "\n");
process.stdout.write(data + "\n");
