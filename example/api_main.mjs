import {createServer} from 'node:http';

const server = createServer((req, res) => {
  res.end("test")
})

server.listen(3000, () => {
  console.log("listen http://localhost:3000/")
})
