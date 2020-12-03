const mysql = require('mysql')

// console.log(mysql)

// 链接信息
const options = {
  host: 'localhost',
  port: '6666',
  user: 'root',
  password: '666666',
  database: 'afu'
}

// 创建数据库的连接对象
const con = mysql.createConnection(options)
// console.log(con)

// 建立连接
con.connect((err) =>{
  if (err) throw err
  console.log('数据库连接成功')
})

// 执行数据库语句

// 执行查询语句 
const checkSql = 'select * from test'

// con.query(checkSql, (err, res, fields) => {
//   if (err) throw err
//   console.log(res, fields)
// })

// 删除表的语句
const delectList = 'drop table user'

// 删除库
const delectStore = 'drop database test'

// 创建库
const createStore = 'create database test'

// 创建  user 表  
const createList = `create table if not exists user(
                          id int primary key auto_increment,
                          name varchar(255)not null,
                          password varchar(255)not null
                      )`

// con.query(createList, (err, res) => {
//   if (err) throw err
//   console.log(res)
// })

// user 表 插入 name, password 数据
const insertData = `insert into user(name, password) values ("aFu", "666666")`

// con.query(insertData, (err, res) => {
//   if (err) throw err
//   console.log(res)
// })

// user 表 插入 name, password 数据  写法 2
const insertData2 = `insert into user(name, password) values (?,?)`

// con.query(insertData2, ['张三', '123123'], (err, res) => {
//   if (err) throw err
//   console.log(res)
// })

// 查询 test 表  foo  1000 - 11000 区间
const selectSection = 'select * from test where foo > 1000 and foo < 11000'

// 查询 test 表  foo  1000 - 11000 区间 写法 2
const selectSection2 = 'select * from test where foo between 1000 and 11000'

// 查询 test 表  name  为 小明的
const selectName = 'select * from test where name = "小明"'

// 查询 test 表  name 为 小明 和 小红
const selectName2 = 'select * from test where name in ("小明","小红")'
const selectName3 = 'select * from test where name ="小明" or "小红"'

// 模糊查询

// 查询 test 表 name 里含有 小 的
const selectDim = 'select * from test where name like "%小%"'

// 只知道前面 一个 小 字 还知道后面有三位 的查询 
// test 表  name 字段
const selectDim2 = 'select * from test where name like "小___"'

// 查找 test 表 name 为空的
const isNall = 'select * from test where name is null'

// 查找 test 表 name 为非空的
const isNall = 'select * from test where name is not null'

// where 条件