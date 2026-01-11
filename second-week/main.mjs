const args = process.argv.slice(2);

function lineWrite(args) {

  const line = args.join(" ");
  process.stdout.write(line + "\n");
}


function write(word) {

  process.stdout.write(word +  " ");
}

write(args[0]);
lineWrite(args);
