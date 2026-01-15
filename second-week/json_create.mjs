const args = process.argv.slice(2);
//console.log(args);

const obj = {};
const key = args[0];
const value = args[1];

obj[key] = value;

console.log(obj);


const json = JSON.stringify(obj);

process.stdout.write(JSON.stringify(args) + "\n");
process.stdout.write(json + "\n");
