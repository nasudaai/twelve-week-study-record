import { writeFileSync } from 'node:fs';

//console.log(writeFileSync);

const title = "# title"

writeFileSync("out/text.md", title + "\n");
