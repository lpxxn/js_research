new Promise((resolve, reject) => {
  console.log('init')
  resolve()
}).then(() => {
  console.log('resolve')
  throw Error('some Error')
}).then(err => {
  console.log(`err: ${err}`)
}).catch((err) => {
  console.log('catch err', err)
})