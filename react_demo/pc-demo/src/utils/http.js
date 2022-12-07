
import axios from "axios"
import { getToken } from "./token"
import { history } from "./history"

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use((config) => {
  // 如果请求已经发送，则跳过
  if (config._startTime) {
    return config
  }
  // 开始计时
  config._startTime = Date.now()

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
  // 计算网速
  let endTime = Date.now()
  // 获取请求发送的时间戳
  var startTime = response.config._startTime
  let elapsedTime = endTime - startTime // 计算请求时间
  // 计算响应的网速（字节/秒）
  const fileSize = response.headers['content-length'] // 获取文件大小
  const downloadSpeed = Math.round(fileSize / elapsedTime * 1000) / 1000 // 计算网速（单位为KB/s）
  console.log(`请求时间:${elapsedTime}ms,文件大小：${fileSize} bytes,网速:${downloadSpeed}KB/s`)

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



/*
// 创建 axios 实例
var axios = require('axios');
var instance = axios.create();

// 发送 HTTP 请求
instance.get('http://example.com/file.txt', {
  onDownloadProgress: function (progressEvent) {
    // 计算下载网速
    var downloadSpeed = calculateSpeed(progressEvent.loaded, progressEvent.timeStamp);

    // 更新页面中的下载网速
    updateDownloadSpeed(downloadSpeed);
  },
  onUploadProgress: function (progressEvent) {
    // 计算上传网速
    var uploadSpeed = calculateSpeed(progressEvent.loaded, progressEvent.timeStamp);

    // 更新页面中的上传网速
    updateUploadSpeed(uploadSpeed);
  }
});

// 定义一个函数，用于计算网速
function calculateSpeed(loaded, timestamp) {
  // 获取当前时间
  var currentTime = Date.now();

  // 计算网速（字节/秒）
  var speed = loaded / (currentTime - timestamp);

  return speed;
}

// 定义一个函数，用于更新页面中的下载网速
function updateDownloadSpeed(speed) {
  // TODO: 更新页面中的下载网速
}

// 定义一个函数，用于更新页面中的上传网速
function updateUploadSpeed(speed) {
  // TODO: 更新页面中的上传网速
}


var startTime = Date.now();
var endTime = Date.now();
var contentLength = response.headers['content-length'];
var timeTaken = endTime - startTime; // 计算请求花费的时间
var speed = (contentLength / timeTaken) * 8; // 计算下载速度（单位：bps）

*/

/*
// 创建 axios 实例
var axios = require('axios');
var instance = axios.create();

// 定义一个中间件，用于处理请求
instance.interceptors.request.use(function (config) {
  // 如果请求已经发送，则跳过
  if (config._sent) {
    return config;
  }

  // 记录请求发送的时间戳
  config._sent = Date.now();

  return config;
});

// 定义一个中间件，用于处理响应
instance.interceptors.response.use(function (response) {
  // 获取请求发送的时间戳
  var sentTime = response.config._sent;

  // 计算响应的网速（字节/秒）
  var speed = response.headers['content-length'] / (Date.now() - sentTime);

  // 更新页面中的网速
  updateSpeed(speed);

  return response;
});

// 发送 HTTP

*/