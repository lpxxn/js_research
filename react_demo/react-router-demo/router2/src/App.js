import Login from './Login'
import Layout from './Layout'
import Board from './Board'
import Artical from './Artical'
import NotFound from './NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* 一级路由 */}
        {/* 指定路径和组件的对应关系 path 代表路径 element 代表组件万对出现 path -> elemetn */}
        <Route path="/" element={<Layout></Layout>} >
          {/* 定义二级路由 */}
          {/* <Route path="/board" element={<Board></Board>} /> */}
          {/* 默认路由，去掉path  */}
          <Route index element={<Board></Board>} />
          <Route path="/artical" element={<Artical></Artical>} />
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
