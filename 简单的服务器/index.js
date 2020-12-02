const http = require('http')

// 创建 server 服务器对象
const server = http.createServer()

// 监听对当前服务器对象的请求
                  // req 请求对象  res 响应对象
server.on('request', (req, res) =>{
  // 当服务器被请求时， 触发的事件， 并传入请求对象 喝 响应对象
  console.log(req)
  res.end('helloWorld')

})

// 监听 服务器端口号
server.listen(3000, () => {
  // 服务器端口启动成功时触发
  console.log('服务器启动成功')
})