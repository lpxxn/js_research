import { BrowserRouter, unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { history } from './utils'
// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import { AuthComponment } from './components/AuthComponent'
import Home from './pages/Home'
import Article from './pages/Article'
import Publish from './pages/Publish'
// 配置路由
function App () {
  return (
    <HistoryRouter history={history} >
      <div className='App'>
        <Routes>
          {/* Layout 需要鉴权处理 */}
          <Route path="/" element={
            <AuthComponment>
              <Layout />
            </AuthComponment>
          } >
            {/* The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is / */}
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Publish />}></Route>

          </Route>

          <Route path="/login" element={<Login />} > </Route>
        </Routes>
      </div>
    </HistoryRouter >
  )
}

export default App
