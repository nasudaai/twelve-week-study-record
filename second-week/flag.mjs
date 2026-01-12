import { writeFile } from 'node:fs';


let word;
let flag;

const args = process.argv.slice(2);
if (args.length === 2) {
  flag = "w";
  word = args[1];
  console.log(flag);
} 


function write(word) {

  process.stdout.write(word + "\n");
}

write(word);
