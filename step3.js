const fs = require('fs')
const process = require('process')
const axios = require('axios')

const { cat } = require('./step1.js')
const { webCat } = require('./step2.js')


async function webCatOut(arg) {
    if (arg[2] === "--out") {
        let output;
        if (arg[4].toLowerCase().includes("http")) {
            output = await webCat(arg[4]);
        } else {
            output = cat(arg[4]);
        }
        fs.appendFile(arg[3], output, "utf8", function (err) {
            console.log(err ? err : `${arg[4]} successfully saved to ${arg[3]}`);
        })
    } else if (arg[2].toLowerCase().includes("http")) {
        let resp = await webCat(arg[2]);
        console.log(resp);
    } else {
        let fileContent = cat(`./${arg[2]}`);
        console.log(fileContent);
    }
}

webCatOut(process.argv)


