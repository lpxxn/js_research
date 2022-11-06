import { counterStore } from "./store/Counter"
import { observer } from 'mobx-react-lite'

function App () {
  return (
    <div>
      <p>count: {counterStore.count}</p>
      <button onClick={counterStore.addCount}>add</button>
    </div>
  )
}

// 使用 observer 包裹组件，使其具有响应式能力
export default observer(App)
