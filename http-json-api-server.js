const http = require('http')
const querystring = require('querystring')
const port = process.argv[2]
http.createServer((req, res) => {
    let myPath = new URL(`http://localhost:${port}${req.url}`)
    if (req.method === 'GET') {
        let myDate = new Date(myPath.searchParams.get('iso'))
        if (myPath.pathname === '/api/parsetime') {
            let output = {
                'hour': myDate.getHours(),
                'minute': myDate.getMinutes(),
                'second': myDate.getSeconds(),
            }
            let jsonString = JSON.stringify(output)
            res.end(jsonString)
        }
        else if (myPath.pathname === "/api/unixtime") {
            res.end(JSON.stringify({
                'unixtime': myDate.getTime()
            }))
        }
    }
}).listen(port)