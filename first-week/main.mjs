//in
const args = process.argv.slice(2);


//Handling errors during input
if (args.length !== 2) {
  process.stdout.write("please arg two!\n");
  process.exit(0);
}

//input process
const [key, value] = args;

//process or conversion

const obj = {key, value};
console.log(obj);


//out

console.log(key, value);
process.stdout.write("log\n");
