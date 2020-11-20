const fs = require('fs')

// 同步读取
const duqu = fs.openSync('hello.txt')

// 取到文件标识
// console.log(duqu)

// 同步
const content = fs.readFileSync(duqu, 'utf-8')

// 读取到内容
// console.log(content)

// 异步
fs.readFile('hello.txt','utf-8', (err, data) => {
  if (err) throw err
  // console.log(data)
})


// 用 promise 封装下
function asycReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}


async function ReadFilex() {
  const f1 = await asycReadFile('hello.txt')
  console.log(f1)
  const f2 = await asycReadFile('hello2.txt')
  console.log(f2)
  const f3 = await asycReadFile('hello3.txt')
  console.log(f3)
}
ReadFilex()