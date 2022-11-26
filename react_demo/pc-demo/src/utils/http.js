
import axios from "axios"

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 状态码会进入这里
  console.log(response)
  return response
}, (error) => {
  // 非 2xx 状态码会进入这里
  return Promise.reject(error)
})

export { http }