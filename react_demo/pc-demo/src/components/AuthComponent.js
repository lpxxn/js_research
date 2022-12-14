// 1. 判断token是否存在
// 2. 如果存在，正常渲染
// 3. 如果不存在， 重定向到登录页面

// 高阶组件： 把一个组件当成另外一个组件的参数传入
// 然后通过一定的判断 返回新的组件

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

function AuthComponment ({ children }) {
  const token = getToken()
  //const navigate = useNavigate()
  if (token) {
    return <>{children}</>
  } else {
    console.log('navigate----')
    // navigate('/login')
    //return <></>
    return <Navigate to="/login" replace />
  }
}

// <AuthComponment> <Layout /> </AuthComponment>
// 登录 <><Layout /></>
// 非登录 <Navigate to="/login" replace />

export { AuthComponment }