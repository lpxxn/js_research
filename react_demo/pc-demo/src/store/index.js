// 把所有的模块统一处理
// 导出一个统一的方法 useStore

import LoginStore from "./login.Store"
import React from "react"
class RootStore {
  constructor() {
    this.loginStore = new LoginStore(this)
  }
}

// 实例化根
// 导出 useStore context

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }