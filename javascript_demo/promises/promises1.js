// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#%E9%94%99%E8%AF%AF%E4%BC%A0%E9%80%92


new Promise((resolve, reject) => {
  console.log('初始化')
  resolve()
}).then(() => {
  console.log('first then')
  throw Error('some error')
}).catch((err) => {
  console.log('catch', err)
}).then((err) => {
  console.log('second then', err)
})