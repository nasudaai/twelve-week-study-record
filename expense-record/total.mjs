const args = process.argv.slice(2);

//console.log(args);

let a = 0 + Number(args[0]);
console.log(a);


let total = 0;
for (let i = 0; i < args.length; i++) {
  total = total + Number(args[i]);
}

console.log(total);
