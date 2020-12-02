const Axios = require('axios')
const https = require('https')
const fs = require('fs')

const httpUrl = 'https://www.dytt8.net/index.htm'

const instance = Axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
})
instance.get(httpUrl).then((res) => {

  fs.writeFile('sspaqushuju.html', res.data, 'utf-8', (err) => {
    if (err) throw err
    console.log('成功')
  })
  
  console.log(res)
}).catch((err) => {
  console.log(err)
})


