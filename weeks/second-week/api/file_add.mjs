import { createServer } from 'node:http';
import { writeFileSync, readFileSync } from 'node:fs';
console.log(createServer);

const server = createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    process.stdout.write(req.url)
    res.end("root");
    return;
  }
  req.on("data", (chunk) => {
    console.log(chunk);
    writeFileSync("out.txt", chunk);
    const data = readFileSync("out.txt", "utf-8");
    res.end(data + "\nwrited file\n");
  });
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000/")
});
