const fs = require('fs')

const events = require('events')

const eventEmitter = new events.EventEmitter()

// 方式一

// fs.readFile('hello.txt', 'utf-8', (err, data) => {
//   if (err) throw err

//   console.log(data)
//   eventEmitter.emit('fileSuccess', data)
// })

eventEmitter.on('fileSuccess', (data) => {
  console.log('成功1', data)
})
eventEmitter.on('fileSuccess', () => {
  console.log('成功2')
})
eventEmitter.on('fileSuccess', () => {
  console.log('成功3')
})

function asycReadEvent(path) {
  return new Promise((resolve, rejects) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        rejects(err)
      } else {
        resolve(data)
      }
      // console.log(data)
      // eventEmitter.emit('fileSuccess', data)
    })
  })
}

// 方式二

// asycReadEvent('hello.txt').then((res) => {
//   // console.log(res, 'res')
  
//   eventEmitter.emit('fileSuccess', res)
// })

// 方式三

async function readFileEvent(){

  const data = await asycReadEvent('hello.txt')
  eventEmitter.emit('fileSuccess', data)
}
readFileEvent()

