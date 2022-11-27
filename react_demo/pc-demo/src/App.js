import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import { AuthComponment } from './components/AuthComponent'
// 配置路由
function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* Layout 需要鉴权处理 */}
          <Route path="/" element={
            <AuthComponment>
              <Layout />
            </AuthComponment>
          } > </Route>
          <Route path="/login" element={<Login />} > </Route>
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App
