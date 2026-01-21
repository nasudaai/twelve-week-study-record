const args = process.argv.slice(2);
//console.log(args);

if (args.length !== 2) {
  process.stdout.write("usage: <key> <value>\n");
  process.exit(1);
}

const obj = {};
const key = args[0];
const value = args[1];

obj[key] = value;

console.log(obj);


const json = JSON.stringify(obj);

process.stdout.write(JSON.stringify(args) + "\n");
process.stdout.write(json + "\n");
