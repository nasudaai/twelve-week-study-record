import { writeFileSync } from 'node:fs';
//console.log(writeFileSync);

const args = process.argv.slice(2);

const title = args[0];

writeFileSync("out/" + title + ".md", title + "\n");
