import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

//check spelling on the first line.
//console.log(createServer);  


//read html
const html = readFileSync("./index.html", "utf-8");
const js = readFileSync("./main.js", "utf-8");
//check
//console.log(html);

//create server

const server = createServer((req, res) => {
  if (req.url === "/main.js") {
    res.writeHead(200, { "content-type": "text/javascript; charset=utf-8"});
    res.end(js);
    return;
  }
  res.end(html);
});

server.listen(3000, () => {
  console.log("lisetn http://localhost:3000");
});
