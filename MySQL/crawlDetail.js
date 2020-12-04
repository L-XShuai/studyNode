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

const con = mysql.createConnection(options, (err) => {
  if (err) throw err
  console.log('数据库连接成功')
})

const selectUPUrl = 'select detailUrl from bookslist'

con.query(selectUPUrl, (err, res) => {
  if (err) throw err

  // const detailUrl = res[0].detailUrl
  res.forEach((element, i) => {
    setTimeout(() => {
      getDetailData(element.detailUrl)
    }, i * 60)
  })


})

async function getDetailData(url) {
  const res = await axios.get(url)

  const $ = cheerio.load(res.data)

  // 书的图片
  const booksImgs = $('.content article .book-left .item .bookpic img').attr('src')

  // 书名
  const booksName = $('.content article .book-left .item .bookinfo ul li:nth-child(1)').text().slice(3)

  // 作者
  const booksAuthor = $('.content article .book-left .item .bookinfo ul li:nth-child(2)').text().slice(3)

  // 标签
  const booksTag = $('.content article .book-left .item .bookinfo ul li:nth-child(4)').text().slice(3)

  // 时间
  const booksTime = $('.content article .book-left .item .bookinfo ul li:nth-child(5)').text().slice(3)

  // 评分
  const booksScore = $('.content article .book-left .item .bookinfo ul li:nth-child(6) b').attr('class').slice(9)

  const booksDetail = [booksImgs, booksName, booksAuthor, booksTag, booksTime, booksScore]

  const insertDetail = `
    insert into booksdetail(booksImgs, booksName, booksAuthor, booksTag, booksTime, booksScore)
    values (?, ?, ?, ?, ?, ?)
  `
  con.query(insertDetail, booksDetail, (err, res) => {
    if (err) throw err
    console.log(res)
  })
}