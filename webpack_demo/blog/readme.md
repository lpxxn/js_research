初始化项目：
yarn init -y

npm init -y

yarn add webpack webpack-cli --dev
npm i webpack webpack-cli --save-dev

npx webpack

touch webpack.config.js


## css-loader
npm i style-loader css-loader --save-dev 

yarn add html-webpack-plugin --dev

npm i html-webpack-plugin --save-dev

## 用babel-loader处理js文件,需要安装babel-loader和babel-core
对js进行降级处理
npm i babel-loader @babel/core @babel/preset-env --save-dev 


## 压缩js
npm i terser-webpack-plugin --save-dev


## webpack-dev-server
npm i webpack-dev-server --save-dev
webpack-dev-server --open

npm start

## 为了避免缓存，可以在文件名后面加上hash值
filename: '[name].[contenthash].js'

## 相对路径
alias: {
    '@': path.resolve(__dirname, 'src')
}


## analyze 分析 webpack 打包后的文件
npm i webpack-bundle-analyzer --save-dev

npx webpack 会打开一个网页，显示打包后的文件大小


https://www.bilibili.com/video/BV11g411y7Sd/?spm_id_from=333.788&vd_source=8d4b220c3958f634b9f3e09271aebf79