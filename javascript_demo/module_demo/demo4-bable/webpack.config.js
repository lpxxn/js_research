const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, // 排除node_modules文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // 引入 插件
  plugins: [
    new HTMLPlugin({
      //title: 'hello world',
      template: './src/index.html'
    })
  ]
}

/*
  bable 用于将高级的、浏览器不识别的语法，转为低级的、浏览器能够识别的语法
  - 1. 在 webpack 中，可以运行如下两套命令，安装两套包，去安装 bable 相关的 loader 功能：
   npm i babel-loader @babel/core @babel/preset-env -D 或者 yarn add babel-loader @babel/core @babel/preset-env -D

   // 插件 plugin
   html-webpack-plugin // 打包代码后，自动生成一个 html 文件，并把打包的 js 自动引入到这个 html 文件中
   npm i html-webpack-plugin -D 或者 yarn add html-webpack-plugin -D

   plugin 不对代码进行编译

*/
