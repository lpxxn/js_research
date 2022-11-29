// 先把所有的工具函数导出的模块在这里导入
// 然后统一导出

import { http } from './http'
import { setToken, getToken, removeToken, TokenInfo } from './token'
import { history } from './history'
export {
  http, history,
  setToken, getToken, removeToken, TokenInfo
}

// import {http} from '@/utils'