const fs = require('fs')

fs.readFile('hello.txt', 'utf-8', (err, data) => {
  if (err) throw err

  console.log(data)

  XSEvent.emit('fileSuccess', data)
})

const XSEvent = {

  event: {},

  on: function(eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn)
    } else {
      this.event[eventName] = [eventFn]
    }
  },

  emit: function(eventName, eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(element => {
        element(eventMsg)
      })
    }
  }

}

XSEvent.on('fileSuccess', (eventMsg) => {
  console.log('执行1', eventMsg)
})
XSEvent.on('fileSuccess', (eventMsg) => {
  console.log('执行2', eventMsg)
})
XSEvent.on('fileSuccess', (eventMsg) => {
  console.log('执行3', eventMsg)
})

