module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 从后向前调用
      }
    ]
  }
}

/*
webpack 默认情况下，只能打包处理 js 类型的文件，无法处理其他非 js 类型的文件；
如果要处理非 js 类型的文件，我们需要手动安装一些合适的第三方 loader 加载器；
- 以css文件为例，安装 npm i css-loader style-loader -D 或者 yarn add css-loader style-loader -D
- 打开 webpack.config.js 这个配置文件，在 module 节点下的 rules 数组中，添加一个新的匹配规则：
  { test: /\.css$/, use: ['style-loader', 'css-loader'] }
  css-loader 负责将 css 文件进行加载；
  style-loader 负责将样式添加到 DOM 中；
- 注意：webpack 处理第三方文件类型的过程：
  1. 发现这个要处理的文件不是 js 文件，然后就去配置文件中，查找有没有对应的第三方 loader 规则；
  2. 如果能找到对应的规则，就会调用对应的 loader 处理这种文件类型；
  3. 在调用 loader 的时候，是从后往前调用的；
  4. 当最后一个 loader 调用完毕，会把处理的结果，直接交给 webpack 进行打包合并，最终输出到 bundle.js 中去；
*/
