import { writeFile } from 'node:fs';


const args = process.argv.slice(2);
if (args.length === 2) {
  const flag = "w";
  console.log(flag);
}

const word = args[0];

function write(word) {

  process.stdout.write(word + "\n");
}

write(word);
