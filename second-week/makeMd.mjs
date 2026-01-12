import { writeFileSync } from 'node:fs';
//console.log(writeFileSync);

const args = process.argv.slice(2);


if (args.length === 0) {
  process.stdout.write("usage: <title> or <title> <filename>\n");
  process.exit(0);
}

const title = args[0];

writeFileSync("out/" + title + ".md", title + "\n");
