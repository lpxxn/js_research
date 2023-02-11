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

3. 链接 mobx 和 react 的中间件

https://codesandbox.io/s/gifted-frog-bk6xkh?file=/src/index.js
