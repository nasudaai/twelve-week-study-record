//in
const args = process.argv.slice(2);
const [key, value] = args;
console.log(key, value);
//out
process.stdout.write("log\n");
