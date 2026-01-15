const args = process.argv.slice(2);
console.log(args);

process.stdout.write(JSON.stringify(args));
