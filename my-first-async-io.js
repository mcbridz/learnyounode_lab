const fs = require('fs')
let input = process.argv[2]
fs.readFile(input, 'utf-8', (err, data) => {
    console.log(data.split('\n').length - 1)
})