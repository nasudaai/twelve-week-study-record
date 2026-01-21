import { createServer } from 'node:http';
console.log(createServer);

const server = createServer((req, res) => {

  if (req.url === "/api" && req.method === "GET") {
    res.end("/api");

    return;
  } 

  if (req.url === "/api" && req.method === "POST") {
    let data = ""; 
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
      res.end(data);
    })

    return;
  }
  res.end("api!!!");
});

server.listen(3000, () => {
  console.log("server listen on http://localhost:3000");
});
