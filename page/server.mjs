import { createServer } from "node:http";
//console.log(createServer);

const server = createServer((req, res) => {

  const chunks = [];

  req.on("data", (chunk) => {
    chunks.push(chunk);
    console.log(chunk);
  });

  req.on("end", () => {
    const body = Buffer.concat(chunks).toString();
    console.log(body);
    res.end(body + "\nsee you");
  });
});

server.listen(3000, () => {
  console.log("server listen http://localhost:3000")
});
