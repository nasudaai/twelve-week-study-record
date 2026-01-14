import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
console.log(createServer);


const html = readFileSync("index.html");
const js = readFileSync("main.js");
const css = readFileSync("styles.css");

const server = createServer((req, res) => {

  if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
    res.end(css);
    return;
  }

  if (req.url === "/main.js") {
    res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
    res.end(js);
    return;
  }
  res.end(html);
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000")
});
