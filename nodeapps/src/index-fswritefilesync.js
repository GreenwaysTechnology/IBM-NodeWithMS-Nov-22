
const fs = require('fs')

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//blocking way of writing data
const newFilePath = './src/assets/hello.txt';

blockMe('start')
fs.writeFileSync(newFilePath, data, options)
blockMe('end')