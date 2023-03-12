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
  }
}

/*
  bable 用于将高级的、浏览器不识别的语法，转为低级的、浏览器能够识别的语法
  - 1. 在 webpack 中，可以运行如下两套命令，安装两套包，去安装 bable 相关的 loader 功能：
   npm i babel-loader @babel/core @babel/preset-env -D 或者 yarn add babel-loader @babel/core @babel/preset-env -D
   配置文件中，新增如下配置节点：
*/
