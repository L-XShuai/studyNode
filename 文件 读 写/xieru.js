const fs = require('fs')

// fs.writeFile('test.txt', '写入的内容', {flag: 'w', encoding: 'utf-8'}, (err) => {
//   if (err) throw err
//   console.log('写入成功')
// })

// // 'a': 打开文件用于追加。 如果文件不存在，则创建该文件。
// // 'r': 打开文件用于读取。 如果文件不存在，则会发生异常。
// // 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。

// fs.writeFile('test.txt', '插入的内容\n', {flag: 'a', encoding: 'utf-8'}, (err) => {
//   if (err) throw err
//   console.log('插入成功')
// })


// 用 promise 封装下

function asycAppendFile(path, content) {
  return new Promise((resolve, rejects) => {
    fs.writeFile(path, content, {flag: 'a', encoding: 'utf-8'}, (err) => {
      if (err) {
        rejects(err)
      } else {
        resolve()
      }
      // console.log('插入成功')
    })
  })
}

async function AppendContent() {

  await asycAppendFile('test.txt', '插入的内容1\n')
  await asycAppendFile('test.txt', '插入的内容2\n')
  await asycAppendFile('test.txt', '插入的内容3\n')

}

AppendContent()

