const mysql = require('mysql')

const axios = require('axios')

const cheerio = require('cheerio')

const options = {
  host: 'localhost',
  port: '6666',
  user: 'root',
  password: '666666',
  database: 'afu'
}

const con = mysql.createConnection(options)

con.connect((err) => {
  if (err) throw err
  console.log('数据库连接成功')
})


async function getListData(num) {
  const httpUrl = `https://sobooks.cc/page/${num}`
  const res = await axios.get(httpUrl)

  
  // console.log(res)
  const $ = cheerio.load(res.data)

 $('#cardslist .card').each((i, element) => {
    const $s = cheerio.load(element)
    
    // 书名
    const bookName = $s('h3 a').text()

    // 作者
    const author = $s('p a').text()

    // 图片
    let bookImg = $s('.thumb-img a img')[0].attribs['data-original']
    const reg = /.*?\?src=(.*?)&.*?/igs
    bookImg = reg.exec(bookImg)[1]

    // 详情地址
    const detailUrl = $s('h3 a').attr('href')

    // 标签
    const tag = $s('.thumb-img a').text()

    // 组装数据
    const group = [bookName, author, bookImg, detailUrl, tag]
    console.log(bookImg)

    const insertData = 'insert into bookslist (bookName, author, bookImg, detailUrl, tag) values (?, ?, ?, ?, ?)'

    con.query(insertData, group, (err, res) => {
      if (err) throw err
      console.log('成功', res)
    })
  })
}

for (let i = 1; i <= 295; i ++) {
  setTimeout(() => {
    getListData(1)
  }, i * 500);
}
