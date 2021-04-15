const http = require('http')
const port = process.argv[2]
http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = ''
        req.on('data', data => {
            body += data.toString()
        })
        req.on('end', () => {
            res.end(body.toUpperCase())
        })
    }
}).listen(port)