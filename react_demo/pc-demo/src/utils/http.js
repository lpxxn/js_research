
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
    history.push("/login")
  }
  return Promise.reject(error)
})

export { http }