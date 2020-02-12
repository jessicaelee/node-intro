const fs = require('fs')
const process = require('process')
const axios = require('axios')

const { cat } = require('./step1.js')


async function webCat(url) {
    try {
        let resp = await axios.get(url)
        return resp.data
    } catch (err) {
        process.exit(1)
        return `Error fetching ${url}: ${err}`
    }
}

// webCat(process.argv[2])

// let path = process.argv[2]

// if (path.startsWith("http")) {
//     webCat(path)
// } else {
//     cat(path)
// }

module.exports = { webCat }