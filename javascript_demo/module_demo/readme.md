## 构建工具

通过构建工具，将ESM规范编写的代码转换为旧的JS语法, 这样可以使所有的浏览器都可以支持

webpack, vite

# webpack
目录： module_demo/demo1
* 使用步骤
  1. 初始化项目 yarn init -y   (npm init -y)
  2. 安装依赖 `webpack`、`webpack-cli`  `yarn add -D webpack webpack-cli`  -D 开发依赖
  3. 在项目中创建src目录，在里面编写代码
  4. `npx webpack`  打包 或者 `yarn webpack`(上面已经 add了，所以可以执行)  打包后，会有dist 目录， main.js 为打包后的文件, src里是前端运行，所以不能用require，要用前端的export
  或者自定义命令
  ```json
  "scripts": {
    "build": "webpack"
  }
  ```
  运行 `yarn build`  打包
