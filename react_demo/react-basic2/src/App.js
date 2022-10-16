import './App.css'

// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

function Test ({ list }) {
  return (
    <div>
      {list.map(item => <div key={item}>{item}</div>)}
    </div>
  )
}
Test.propTypes = {
  // 自定义校验规则
  list: PropTypes.array // 限定list必须是数组
}

function App () {
  return (
    <div className="App">
      hello world
      <Test list={[1, 2, 3]} />
    </div>
  )
}

export default App
