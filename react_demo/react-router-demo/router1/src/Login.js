// 1 导入 useNavigate

import { useNavigate } from "react-router-dom"

function Login () {
  // 2. 执行useNavigate 得到一个转跳函数
  const navigate = useNavigate()
  // 跳转到关于页面
  const toAbout = () => {
    // 3. 调用转跳函数
    navigate('/about?id=1&name=jack', { replace: true })
  }
  return (
    <div>
      Login
      <button onClick={toAbout}>跳转到关于页面</button>
    </div>
  )
}

export default Login