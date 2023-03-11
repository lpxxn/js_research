const path = require('path')
module.exports = {
  mode: 'production',

  entry: {
    // 对象方式，会打包成多个文件
    m1: './src/a.js',
    m2: './src/b.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // [name] 会被 entry 中的 key 替换
    // 也可以加一些id hash
    // filename: '[name].[id].[hash].js',
    clean: true
  }
}
