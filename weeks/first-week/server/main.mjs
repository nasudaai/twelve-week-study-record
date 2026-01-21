import { createServer } from 'node:http'


const server = createServer((req, res) => {
  const { method, url } = req
  let body = []

  req.on("data", (chunk) => {
    body.push(chunk)
  })
  req.on("end", () => {
    body = Buffer.concat(body).toString()

    const responseBody = { method, url, body }
    res.write(JSON.stringify(responseBody))
    res.end()
  })
})

server.listen(3000, () => {
  console.log("server listen on http://localhost:3000")
})
