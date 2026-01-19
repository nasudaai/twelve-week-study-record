import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const html = readFileSync("index.html", "utf-8");
//console.log(html);


const server = createServer((req, res) => {
  res.end(html);
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
