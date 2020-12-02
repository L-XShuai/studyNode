const http = require('http')

const path = require('path')

const url = require('url')

class aFuApp {
  constructor() {
    // 创建 server
    this.server = http.createServer()
    // 初始化 回调事件
    this.reqEvent = {}

    // 监听请求
    this.server.on('request', (req, res) => {
      // console.log(req, res)

      // let pathObj = url.parse(req.url)
      // pathObj = path.parse(pathObj.pathname)
      // console.log(pathObj)

      let pathObj = path.parse(req.url)
      // console.log(pathObj)

      // 判断 pathObj.dir 是否 在 this.reqEvent
      if (pathObj.dir in this.reqEvent) {
        req.pathObj = pathObj
        // 在的话 调用 
        this.reqEvent[pathObj.dir](req, res)
      } else {
        res.setHeader("content-type", "text/html;charset=utf-8")
        res.end("<h1>页面找不到</h1>")
      }
    })
  }

  on(url, fn) {
    this.reqEvent[url] = fn
  }

  run(port, callback) {
    this.server.listen(port, callback)
  }

}

module.exports = aFuApp

