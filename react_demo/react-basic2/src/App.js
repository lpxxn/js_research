import './App.css'

// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'
// 默认值也可以直接写在参数里
function Test ({ list, pageSize, msg = 'hello' }) {
  return (
    <div>
      {list.map(item => <div key={item}>{item}</div>)}
      <div>pageSize: {pageSize}</div>
      <p>msg: {msg}</p>
    </div>
  )
}
Test.propTypes = {
  // 自定义校验规则
  list: PropTypes.array, // 限定list必须是数组
}

// 默认值
Test.defaultProps = {
  pageSize: 10
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
