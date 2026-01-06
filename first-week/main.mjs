//in
const args = process.argv.slice(2);
const [key, value] = args;


//Handling errors during input
if (args.lengts !== 2) {
  process.stdout.write("please arg two!\n");
  process.exit(1);
}


//out

console.log(key, value);
process.stdout.write("log\n");
