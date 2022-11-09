import { makAutoObservable, makeAutoObservable } from 'mobx'


class CounterStore {
  // 1. 定义数据
  count = 0;

  constructor() {
    // 2. 使用 makeAutoObservable 生成 mobx 的数据
    makeAutoObservable(this)
  }

  // 3. 定义action函数，修改数据
  addCount = () => {
    this.count++
  }

  list = [1, 2, 3]
  // 1. 定义计算属性
  get filterList () {
    return this.list.filter(item => item > 1)
  }
  // 2. 定义action函数，修改数据
  addList = () => {
    this.list.push(4, 5, 6)
  }
}

//let counterStore = new CounterStore()
export { CounterStore }
