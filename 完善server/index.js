const aFuApp = require('./aFuApp')

let App = new aFuApp

App.on('/', (req, res) => {
  console.log(req.pathObj)
  res.setHeader("content-type", "text/html;charset=utf-8")
  res.end('这是首页')
})

App.on('/about', (req, res) => {
  // console.log(req)
  res.setHeader("content-type", "text/html;charset=utf-8")
  if (req.pathObj.base === 'index') {
    res.end('这是关于我们')
  } else {
    res.end('这是关于我们其他页面')
  }
})

App.run(80, () => {
  console.log('服务器启动成功', 'http://192.168.1.108:80')
})