import { createServer } from 'node:http';

console.log(createServer);

const server = createServer((req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk);
    res.end(chunk);
  });
});


server.listen(3001, () => {
  console.log("server listen http://localhost:3000")
});
