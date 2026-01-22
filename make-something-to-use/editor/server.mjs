import { createServer } from 'node:http';
//console.log(createServer);

const server = createServer((req, res) => {
  res.end(`<h1>editor</h1> <textarea style="width: 100%; box-sizing: border-box;"></textarea>`)
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
