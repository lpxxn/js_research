
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      // 约定：使用 @ 符号来代表 src 目录
      '@': path.resolve(__dirname, 'src')
    }
  }
}