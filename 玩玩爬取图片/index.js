const axios = require('axios')


const httpUrl = 'https://gateway.cnhnb.com/monk/operation-support/v500/category/menu/query'
// axios.post(httpUrl).then(res => {
//   console.log(res.data)
// })

async function listData() {
  const res = await axios.post(httpUrl)

  // console.log(res.data.data[1])
  typeData(res.data.data[1])
}

listData()


async function typeData(val) {
  const res = await axios({
    method: 'post',
    url: 'https://gateway.cnhnb.com/monk/operation-support/v500/category/content/query',
    data: {
      type: val.type,
      value: val.value
    }
  })

  // 分类里的 项
  console.log(res.data.data.categoryInfos)

  res.data.data.categoryInfos.forEach(element => {
    // console.log(element.subCates)

    element.subCates.forEach(item =>{
      console.log(item.pictureUrl)
    })
  });
}