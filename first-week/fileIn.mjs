import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);


let mode;
let file;

if (args.length === 2) {
  mode = args[0];
  file = args[1];
  console.log(args);
} else if (args.length === 1) {
  file = args[0];
} else {
  write("usage: <mode> <file> or <file>");
  process.exit(1);
}



if (mode === "-w") {
  write("add:")
  process.stdin.on("data", (chunk) => {
    write(chunk);
  });
}

const data = readFileSync(file, "utf-8");

//out process
function write(data) {
  process.stdout.write(data + "\n")
}
//process.stdout.write(file + "\n");
//process.stdout.write(data + "\n");

write(file);
write(data);
