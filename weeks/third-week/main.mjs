function main() {
  const args = process.argv.slice(2);

  const string = args.join();
  const json = JSON.stringify(args);

  process.stdout.write("test\n");
  process.stdout.write(string);
  process.stdout.write(json);

};

main();
