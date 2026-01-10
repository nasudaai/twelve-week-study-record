
process.stdin.on("data", (chunk) => {
  
  process.stdout.write(chunk);
  process.stdout.write("\n");
  console.log(chunk);
})
