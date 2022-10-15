import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css'
// 引入根组件
import App from './App'

import HelloComponent from './HelloCompoent'
import FatherSon from './FatherSon'
import Brother from './Brother'

import ContextFather from './ContextFather'
// 渲染根组件
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 严格模式节点去掉
  // useEffect 的执行时机
  // <React.StrictMode>
  <div>

    <App />

    <HelloComponent></HelloComponent>
    <FatherSon></FatherSon>
    <Brother></Brother>

    <ContextFather></ContextFather>
  </div>
  // </React.StrictMode>
)
