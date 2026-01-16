const args = process.argv.slice(2);
const keyStr = "key";
const valueStr = "value";

const obj = {keyStr: valueStr};
const json = JSON.stringify(obj);


const structure = {
  key: "value"
};

process.stdout.write(JSON.stringify(structure) + "\n");
