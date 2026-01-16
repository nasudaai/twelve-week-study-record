// trial program
const str = "string";

const obj = {key: "value"};
const json = JSON.stringify(obj);

function cJson(obj) {
  const json = JSON.stringify(obj);
  return json;
}

function write(str) {

  process.stdout.write(str + "\n");
};

write(str);
write(json);
write(cJson(obj));
