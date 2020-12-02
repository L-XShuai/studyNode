
// 目标 ： 下载音乐
// 1 获取音乐相关信息，通过音乐相关 信息获取 Mp3 地址
// 2 如何获取大量的音乐信息， 通过获取音乐列表
// 3 通过音乐的分类页，获取音乐列表

const axios = require('axios')

async function getPage(pageNum) {
  const res = await axios.get(`http://www.app-echo.com/api/recommend/sound-day?page=${pageNum}`)
  // console.log(res.data)
  res.data.list.forEach(element => {
    const title = element.sound.name
    const mp3Url = element.sound.source
    console.log(title, mp3Url)
  });
}

getPage(1)