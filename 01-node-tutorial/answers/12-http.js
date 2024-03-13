const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("This our home page!")
    }
})

server.listen(3000);