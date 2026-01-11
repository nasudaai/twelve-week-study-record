const args = process.argv.slice(2);
const word = args[0];

function write(word) {
  process.stdout.write(word + "\n")
}


write(word);
