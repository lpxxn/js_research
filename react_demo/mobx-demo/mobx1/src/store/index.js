// 组合子模块
// 封装统一导出的供业务使用的方法
import { ListStore } from './list.Store'
import { CounterStore } from './counter.Store'
import React from 'react'
// 1. 声明一个rootStore
class RootStore {
  constructor() {
    // 2. 将子模块实例化
    this.ListStore = new ListStore()
    this.counterStore = new CounterStore()
  }
}

// 样板代码
// 实例化操作
const rootStore = new RootStore()
// 使用react context机制 完成统一方法封装
const context = React.createContext(rootStore)
// Provider value={传递的数据}， Provider的查找机制：从当前组件开始，向上查找，直到找到第一个Provider为止
// 优先从Privider value={传递的数据}中获取数据，如果没有找到，就使用createContext方法传递过来的默认值

// 这个方法的作用：通过useContext获取到Provider中传递的数据,拿到rootStore实例，然后返回
// 只要在业务组件中调用 useStore()，就可以拿到rootStore实例
const useStore = () => React.useContext(context)

export { useStore }
