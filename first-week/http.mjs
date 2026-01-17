import { createServer } from 'node:http';
console.log(createServer);

const server = createServer((req, res) => {
  res.end("hi!");
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
