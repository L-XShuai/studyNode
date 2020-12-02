const Axios = require('axios')

const https = require('https')

const httpUrl = 'https://www.1905.com/vod/list/n_1/o3u1p1.html?fr=vodhome_js_lx'

const instance = Axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
})

// 获取分类接口
instance.get(httpUrl).then(res => {
  const reg = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs

  // 拿到 分类
  const result = reg.exec(res.data)[1]

  // 根据 拿到的分类 用正则 匹配 里面的每一项
  const regItem = /<a .*? onclick="location\.href='(.*?)';return false;" (.*?)>(.*?)<\/a>/igs

  var resultItem;

  const arrResult = []

  while (resultItem = regItem.exec(result)) {
    // 拿到分类 里的每一项
    let obj = {
      className: resultItem[3],
      url: resultItem[1]
    }

    classContent(resultItem[1])
    // 添加到 数组去
    arrResult.push(obj)
  }
  
  // 拿到 分类 每一项
  console.log(arrResult)
})

// 获取 分类里的内容
function classContent (url) {
  
  instance.get(url).then(res => {
      const refs = /<a class="pic-pack-outer" target="_blank" href="(.*?)" .*?><\/a>/igs

      let regs;

      const contentList = []

      while (regs = refs.exec(res.data)) {
        contentList.push(regs[1])
      }
      // console.log(contentList)
  })
}

