const fs = require('fs')
const process = require('process')

function cat(path) {
    try {
        let data = fs.readFileSync(path, "utf8")
        return data
    } catch (err) {
        console.error(`Error reading ${path}, ${err}`)
        process.exit(1)
    }
}

// cat(process.argv[2])

// node step1.js one.txt
//  [0]    [1]     [2]
//'one.text' is the [2] index 


module.exports = { cat }