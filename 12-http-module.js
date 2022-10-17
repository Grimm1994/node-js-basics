const http = require("http")

http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("welcome to our homepage")
    }
    if (req.url === "/about") {
        res.end("welcome to our about")
    }
    res.write(`
      <h1>Oops!</h1>
      <p>Page not found</p>
      <a href="/">Back home</a>
    `)
}).listen(3000)
