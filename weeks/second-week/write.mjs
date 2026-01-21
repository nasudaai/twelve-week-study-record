const args = process.argv.slice(2);

function changeLine(args) {
  const line = args.join(" ");
  return line;
}

const line = changeLine(args);

function lineWrite(line) {

//  const line = args.join(" ");
  process.stdout.write(line + "\n");
}


function write(word) {

  process.stdout.write(word +  " ");
}

write(args[0]);
lineWrite(line);
