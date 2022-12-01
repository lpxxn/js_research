
import axios from "axios"
import { getToken } from "./token"
import { history } from "./history"

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use((config) => {
  const tokenInfo = getToken()
  if (tokenInfo) {
    config.headers.Authorization = `Bearer ${tokenInfo.accessToken}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 状态码会进入这里
  console.log(response)
  return response.data
}, (error) => {
  // 超出2xx的状态码都会进入这里
  console.dir(error)
  if (error.response.status === 401) {
    // 跳回到登录页
    console.log('token过期了')
    // 这个可以用，会导致页面刷新，用户体验差？
    // window.location.href = '/login'
    // 这个也可以
    history.push("/login")
    // https://github.com/remix-run/react-router/issues/8264
  }
  return Promise.reject(error)
})

export { http }