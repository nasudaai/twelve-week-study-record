// trial program
const str = "string";

const obj = {key: "value"};
const json = JSON.stringify(obj);

function write(str) {

  process.stdout.write(str + "\n");
};

write(str);
write(json);
