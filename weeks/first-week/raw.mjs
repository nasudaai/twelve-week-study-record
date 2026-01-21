let isRaw = true;
process.stdin.setRawMode(true);
process.stdin.resume();
//process.stdin.setEncoding('utf-8');

process.stdin.on("data", (chunk) => {
if (isRaw) {
  process.stdout.write(chunk);
  process.stdout.write(":")
  console.log(chunk);

  if (chunk[0] === 0x03) {
    process.stdin.setRawMode(false);
    process.stdin.setEncoding('utf-8');
    isRaw = false;
  }
//    process.exit();
  return;
}

  const input = chunk.trim();


  if (input === "q") {
    process.exit(0);
  }
});
