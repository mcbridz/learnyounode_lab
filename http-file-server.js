const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const file = process.argv[3]

http.createServer((req, res) => {
    let readStream = fs.createReadStream(file)
    readStream.pipe(res)
}).listen(port)
