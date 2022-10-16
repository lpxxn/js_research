import './App.css'
import React from 'react'

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

// 默认值,这种已经不推荐了，使用上面的方式，直接写在参数里
Test.defaultProps = {
  pageSize: 10
}
// 默认值1.使用defaultProps,2. static 类形态属性定义
class Test2 extends React.Component {
  static defaultProps = {
    pageSize: 10,
    msg: 'hello'
  }
  render () {
    return (
      <div>
        pageSize: {this.props.pageSize} msg: {this.props.msg}
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      hello world
      <Test list={[1, 2, 3]} />
      <Test2 msg={'ni hao~~'} />
    </div>
  )
}

export default App
