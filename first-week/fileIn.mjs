import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const file = args[0];


process.stdout.write(file + "\n");
