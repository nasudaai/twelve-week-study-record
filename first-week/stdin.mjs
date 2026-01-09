process.stdin.setEncoding('utf-8');
process.stdin.resume();

const arr = [];

process.stdin.on("data", (chunk) => {

// exit
  if (chunk.trim() === "exit") {
    process.stdout.write("ok! exit!\n");
    console.log(arr);
    process.exit(0);
  }

// process
  arr.push(chunk)

  
//out  
  process.stdout.write(chunk);
});

//exit
process.on('SIGINT', () => {
  process.stdout.write("\nexit\n");
  process.exit(0);
});
