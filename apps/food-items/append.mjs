import { appendFileSync } from 'node:fs';
//console.log(appendFileSync);

const args = process.argv.slice(2);

const items = args.join(" ");
console.log(items);

appendFileSync("out/food-items.md", items + "\n");
