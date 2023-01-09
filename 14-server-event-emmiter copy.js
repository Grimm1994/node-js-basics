import { createServer } from "http"

// const server = createServer((req, res) => {
//     res.end('Welcome')
// })

const server = createServer()

server.on("request", (req, res) => {
    res.end("Welcome 11")
})

server.listen(5001)
