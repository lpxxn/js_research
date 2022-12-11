import { BrowserRouter, unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { history } from './utils'
import { AuthComponment } from './components/AuthComponent'
import { lazy, Suspense } from 'react'
// 导入页面组件
const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./pages/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Article = lazy(() => import('./pages/Article'))
const Publish = lazy(() => import('./pages/Publish'))
// 配置路由
function App () {
  return (
    <HistoryRouter history={history} >
      <div className='App'>
        <Suspense fallback={<div style={{ textAlign: 'center', marginTop: 200 }}>loading...</div>}>
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
        </Suspense>
      </div>
    </HistoryRouter >
  )
}

export default App
