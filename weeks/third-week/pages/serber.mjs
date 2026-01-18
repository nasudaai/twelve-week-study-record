import { readFileSync } from 'node:fs';

const html = readFileSync("index.html", "utf-8");
console.log(html);
