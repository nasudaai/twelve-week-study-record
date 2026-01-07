process.stdin.setEncoding('utf-8');
process.stdin.resume();


process.stdin.on("data", (chunk) => {

// exit
  if (chunk.trim() === "exit") {
    process.stdout.write("ok! exit!\n");
    process.exit(0);
  }
  
//out  
  process.stdout.write(chunk + "\n")
});

//exit
process.on('SIGINT', () => {
  process.stdout.write("\nexit\n")
  process.exit(0);
});
