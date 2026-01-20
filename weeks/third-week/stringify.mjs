const args = process.argv.slice(2);

const obj = {
  args: args // argsでもいい
};
console.log(obj);

process.stdout.write(JSON.stringify(args));
