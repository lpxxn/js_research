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

## 富文本编辑器

https://github.com/zenoamaro/react-quill

```
npm install react-quill

pnpm add react-quill
```

https://velog.io/@jsy7517/React-Quill%EC%97%90%EC%84%9C-Image-Resize-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

```
pnpm add quill-image-resize
```

## build 打包

```
pnpm build


会多两行输出项
npm install -g serve
  serve -s build
```

## 分析

https://github.com/danvk/source-map-explorer

```

"report": "source-map-explorer 'build/static/js/*.js'"
```

pnpm report
