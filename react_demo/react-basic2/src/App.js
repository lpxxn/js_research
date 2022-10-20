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
  state = {
    msg: '',
    flag: true
  }
  render () {
    console.log("render")
    return (
      <div>
        pageSize: {this.props.pageSize} msg: {this.props.msg}
        {this.state.flag ? <Test3></Test3> : null}
        <button onClick={this.Click}>click msg:{this.state.msg}</button>
      </div>
    )
  }
  Click = () => {
    console.log("click")
    this.setState({
      msg: 'world',
      flag: !this.state.flag
    })
  }
  constructor() {
    super()
    console.log("constructor")
  }
  componentDidMount () {
    console.log("componentDidMount 挂载阶段")
  }
  componentDidUpdate () {
    console.log("componentDidUpdate, 组件更新完后（DOM渲染完毕），不要在里面直接操作 setState")
  }


}

class Test3 extends React.Component {
  render () {
    return (<div>Test3</div>)
  }
  // 如果和视图没有关系，就不用写到state对象里。
  timer = null
  componentDidMount () {
    this.timer = setInterval(() => {
      console.log('定时任务')
    }, 1000)
  }
  componentWillUnmount () {
    console.log("componentWillUnmount, 卸载阶段")
    // 如果不清理，会一直存在。
    clearInterval(this.timer)
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
