
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      // 约定：使用 @ 符号来代表 src 目录
      '@': path.resolve(__dirname, 'src')
    },

    configure: (webpackConfig) => {
      let cdn = {
        js: [],
        css: []
      }
      // 只有生产环境才配置
      whenProd(() => {
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
        cdn = {
          // js: [
          //   "https://unpkg.com/react@18/umd/react.production.min.js", "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
          // ],
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
          ],
          css: []
        }
      })
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )
      if (isFound) {
        // 找到HtmlWebpackPlugin的插件
        match.userOptions.cdn = cdn
      }
      return webpackConfig
    }
  }
}