const fs = require('fs')
let input = process.argv[2]
// console.log(input)
const data = fs.readFileSync(input, "utf-8").split('\n').length - 1
// console.log(file)
console.log(data)

