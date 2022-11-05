import Home from './Home'
import About from './About'
import Login from './Login'

import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App () {
  return (
    // 声明当前用一个非hash路由
    <BrowserRouter>
      {/* 指定跳转的组件 to 用来配置路由地址 */}
      <Link to="/" > 首页 </Link>
      <Link to="/about" > 关于 </Link>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系 path 代表路径 element 代表组件万对出现 path -> elemetn */}
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
