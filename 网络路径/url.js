const url = require('url')

console.log(url)

const httpUrl = 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'

// 解析 url 地址
console.log(url.parse(httpUrl))