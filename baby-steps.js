// console.log(process.argv)
let input = process.argv
let output = 0
for (let i = 2; i < input.length; ++i) {
    output += parseInt(input[i], 10)
}
console.log(output)
// return output