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

}

let counterStore = new CounterStore()
export { counterStore }
