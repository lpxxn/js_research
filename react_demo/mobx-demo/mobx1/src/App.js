import { counterStore } from "./store/Counter"
// 导入 observer 连接react和mobx
import { observer } from 'mobx-react-lite'

function App () {
  return (
    <div>
      <p>count: {counterStore.count}</p>
      <button onClick={counterStore.addCount}>add</button>
      <p>使用计算属性 filterList: {counterStore.filterList.join('-')}</p>
      <button onClick={counterStore.addList}>添加List元素</button>
    </div>
  )
}

// 使用 observer 包裹组件，使其具有响应式能力
export default observer(App)
