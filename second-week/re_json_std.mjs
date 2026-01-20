const args = process.argv.slice(2);
const keyStr = "key";
const valueStr = "value";

const obj = { [keyStr] : valueStr};
const json = JSON.stringify(obj);
console.log(json);


const structure = {
  key: "value"
};

structure["key"] = args[0]
process.stdout.write(JSON.stringify(structure) + "\n");

/*
const object = Object.create({x: 1});
console.log(object);
*/
