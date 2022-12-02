mobx 环境配置

## 概念

mobx 是一个独立的响应式库， 可以独立于任何 UI 框架使用， 也可以和 react 一起使用。

## 配置

1. 通过 create-react-app 创建 react 项目

```
npx create-react-app mobx-demo

pnpm dlx create-react-app mobx-demo
```

2. 安装 mobx

```
npm install mobx mobx-react --save

pnpm add mobx mobx-react-lite

```

## scss

```
pnpm add -D sass

pnpm add react-router-dom

pnpm add antd

pnpm add -D @craco/craco

pnpm add echarts
```

3. 链接 mobx 和 react 的中间件

https://codesandbox.io/s/gifted-frog-bk6xkh?file=/src/index.js

##

源码地址：https://gitee.com/react-cp/react-pc-code
React 基础讲义: https://www.yuque.com/fechaichai/qeamqf/xbai87
React 和 Mobx 讲义: https://www.yuque.com/fechaichai/qeamqf/apomum
ReactPc 项目讲义: https://www.yuque.com/fechaichai/tzzlh1
ant Design https://ant.design/components/button-cn

```

/src
/assets 项目资源文件，比如，图片 等
/components 通用组件
/pages 页面
/store mobx 状态仓库
/utils 工具，比如，token、axios 的封装等
App.js 根组件
index.css 全局样式
index.js 项目入口

```

```

```
