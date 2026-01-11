const args = process.argv.slice(2);
const word = args[0];
const line = args.join(" ");
//console.log(line)

function write(word) {
  process.stdout.write(word + "\n")
}


write(word);
write(line);
