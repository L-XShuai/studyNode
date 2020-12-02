// 文件写入流

const fs = require('fs')

const writeStream = fs.createWriteStream('test.txt')


writeStream.on('close', () => {
  console.log('关闭')
})

// console.log(writeStream)
writeStream.on('open', () => {
  console.log('打开文件')
})
writeStream.end(() => {
  console.log('整个事件结束')
})