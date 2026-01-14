import { createServer } from 'node:http';
console.log(createServer);

const server = createServer((req, res) => {
  res.end("api!!!");
});

server.listen(3000, () => {
  console.log("server listen on http://localhost:3000");
});
