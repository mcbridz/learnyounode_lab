const http = require('http')
let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]
let urls = [url1, url2, url3]
let count = 0
let res1 = '', res2 = '', res3 = ''
let printResults = (arg1, arg2, arg3) => {
    console.log(arg1 + '\n' + arg2 + '\n' + arg3)
}
let storeResults = (arg, result) => {
    if (arg == 0) { res1 += result }
    else if (arg == 1) { res2 += result }
    else { res3 += result }
}
urls.forEach((urlToGet, i) => {
    http.get(urlToGet, (res) => {
        res.setEncoding('utf8')
        res.on('data', (data) => {
            let placeholder = i
            storeResults(placeholder, data)
        })
        res.on('end', () => {
            count++
            if (count === 3) {
                printResults(res1, res2, res3)
            }
        })
    })
})
//////////////////////////////////////////
// This call was factored after passing learnyounode verification
// If this is an incorrect re-factoring of my original function
// it is located directly below, commented out
///////////////////////////////////////////
// for (let i = 0; i < 3; ++i) {
//     http.get(urls[i], (res) => {
//         res.setEncoding('utf8')
//         res.on('data', (data) => {
//             let placeholder = i
//             if (typeof (data) == 'string') {
//                 storeResults(placeholder, data)
//             } else if (typeof (data) == 'array') {
//                 storeResults(placeholder, data)
//             }
//         })
//         res.on('end', () => {
//             count++
//             if (count === 3) {
//                 printResults(res1, res2, res3)
//             }
//         })
//     })
// };
