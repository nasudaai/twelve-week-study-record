function write(str) {
  
  process.stdout.write(str + "\n");
};

function main() {

  const args = process.argv.slice(2);
  process.stdout.write(JSON.stringify(args));

  const str = "string";
  write(str);
};

main();
