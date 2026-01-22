function write() {
  
  process.stdout.write("test\n");
};

function main() {

  const args = process.argv.slice(2);
  process.stdout.write(JSON.stringify(args));

  write()
};

main();
