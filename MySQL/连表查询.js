
// 全连接查询

// inner join 连表关键字
// on 条件关键字
// where 条件

// 一对多
// 表 A 一 表 B 是多
// 表A 和 表B 里连接查询 A.id = 1 的内容 
const evenWacth = 'select * from A inner join B on A.id = B.id where A.id = 1'


// left join 连表关键字 查询时 有些字段以左边的表为准 没有的时候为 null
const evenWacth2 = 'select * from A left join B on A.id = B.id'


// right join 连表关键字 查询时 有些字段以右边边的表为准 没有的时候为 null
const evenWacth3 = 'select * from A right join B on A.id = B.id'

// 表 A 表 B 表 C 关联查询
const eventWacth4 = `
  select * from A 
  inner join B on A.id = b.aId
  where A.id = 1
  inner join C on B.id = C.id
  where C.name = 'XXX
`

// 省 市 区
// 自关联查询
const eventWacth5 = `
select * from A as A1
inner join A as A2
on A1.id = A2.id
where A1.name = 'XXX
`
