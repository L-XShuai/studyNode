// 文件写入流

const fs = require('fs')

const writeStream = fs.createWriteStream('test.txt')

console.log(writeStream)