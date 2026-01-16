import {createServer} from 'node:http';

console.log(createServer);


const server = createServer((req, res) => {

  const obj = { url: req.url}
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(obj));
});


server.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
