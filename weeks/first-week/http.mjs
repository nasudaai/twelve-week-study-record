import { createServer } from 'node:http';
console.log(createServer);

const server = createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      
      body += chunk;
      res.end(body);
    });

    return;
  }
  res.end("hi!");
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
