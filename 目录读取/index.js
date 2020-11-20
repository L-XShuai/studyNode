const fs = require('fs')

fs.readdir('../文件 读 写/',(err, files) => {
  if (err) throw err
  console.log(files)
})