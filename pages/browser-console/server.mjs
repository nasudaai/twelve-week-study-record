import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const html = readFileSync("./index.html", "utf-8");
const js = readFileSync("./main.js", "utf-8");
const css = readFileSync("./styles.css", "utf-8");

const server = createServer((req, res) => {

  //read css
  if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css; charser=utf-8"});
  }

  if (req.url === "/main.js") {
    res.writeHead(200, { "content-type": "text/javascript; charset=utf-8"});
    res.end(js);
    return;
  }
  res.end(html);
});

server.listen(3001, () => {
  console.log("lisetn http://localhost:3001");
});
