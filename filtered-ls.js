const fs = require('fs')
let dir = process.argv[2]
let ext = process.argv[3]
fs.readdir(dir, { encoding: 'utf-8' }, (err, files) => {
    // console.log(files)
    for (let i = 0; i < files.length; ++i) {
        if (files[i].indexOf('.' + ext) != -1) {
            console.log(files[i])
        }
    }
})