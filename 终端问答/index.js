const readline = require('readline')

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

r1.question('终端问答', (answer) => {
  console.log('你的答案： ', answer)
  r1.close()
})

r1.on('close', () => {
  process.exit(0)
})