process.stdin.setEncoding('utf-8');
process.stdin.resume();


process.stdin.on("data", (chunk) => {
  
  process.stdout.write(chunk + "\n")
});


