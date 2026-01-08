import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

//check spelling on the first line.
//console.log(createServer);  


//read html
const html = readFileSync("./index.html", "utf-8");
//check
//console.log(html);

//create server

const server = createServer((req, res) => {
  res.end(html);
});

server.listen(3000, () => {
  console.log("lisetn http://localhost:3000");
});
