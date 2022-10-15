import React from "react"
import { Consumer } from "./ContextFather"
//  App -> A -> C
// App 数据 -> c
// 注意事项
// 1. 上层组件和下层组件关系是相对的，只要存在就可以使用 通常我们都会通过app作为数据提供方
// 2. 这里涉及到的语法都是固定的，有两处，提供的位置value提供数据 获取的位置 {value => 使用value 做什么都可以}
// 3. 导入createContext方法并执行，结构提供者和消费者


function ComA () {
  return (
    <div>
      this is ComA
      <ComC />
    </div>
  )
}

function ComC () {
  return (
    <div>
      this is ComC
      <Consumer>
        {value => <div>{value} .. in ComC</div>}
      </Consumer>
    </div>
  )
}


export default ComA