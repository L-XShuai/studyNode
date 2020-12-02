const cheerio = require('cheerio')

const axios = require('axios')

const fs = require('fs')

const path = require('path')

const httpUrl = 'https://www.fabiaoqing.com/bqb/lists/page/1.html'


// 获取 首页 里的数据
axios.get(httpUrl).then(res => {
  const $ = cheerio.load(res.data)

  $('#container .ui #bqblist>a').each((i, element) => {
    // console.log(i, element)
    const urlItem = 'https://www.fabiaoqing.com' + $(element).attr('href')
    const title = `表情包${i}`
    // let title = $(element).find('.header').text()

    // const reg = /(.*?)|\/.*?/igs
    // console.log(title)
    // title = reg.exec(title)

    // console.log(title)

    fs.mkdir(`./img/${title}`, (err) => {
      if (err) throw err
      console.log('创建成功')
    })
    // console.log(urlItem)

    parsePage(urlItem, title)
  })
})

// console.log(cheerio)

// 根据首页 获取每一项 里的内容
async function parsePage(urls, title) {
   const res = await axios.get(urls)

   const $ = cheerio.load(res.data)

   $('.swiper-wrapper .bqppdiv1 img').each((i, element) => {
    //  拿到 图片地址
      const imgUrl = $(element).attr('data-original')
    //  console.log(imgUrl)

      // 拿到图片 后缀名
      const extName = path.extname(imgUrl)
      // console.log(extName)

      // 拼接图片名称
      const imgName = `./img/${title}/${title}-${i}${extName}`

      const ws = fs.createWriteStream(imgName)
                          //  设置流文件
      axios.get(imgUrl, {responseType: 'stream'}).then(res => {
        console.log(res)
        res.data.pipe(ws)
      })
   })


}