import React from "react"

// 函数式Son
function Son1 (props) {
  // props 是一个对象，里面存放的是父组件传递过来的数据
  // props 是只读的，不能修改
  // props.name = 'lipeng' //error
  return (
    <div>
      <h1>son1</h1>
      <button onClick={props.clickHandler}>点击我{props.message}</button>
    </div>
  )
}

// 类组件Son
class Son2 extends React.Component {
  render () {
    return (
      <div>
        <h1>son2</h1>
        {/* 类组件必须通过this关键词去获取,这里的props是固定的 */}
        <button onClick={() => { this.props.clickHandler2("hello") }}>点击我{this.props.message}</button>
      </div>
    )
  }
}

class Father extends React.Component {
  state = {
    message: 'this is father message',
    clickHandler: () => {
      console.log('father click', this)
    },
    clickHandler2: (msg) => {
      console.log('father click2', this, msg)
    }
  }
  changeHandler = (e) => {
    console.log(this)
    this.setState({
      message: e.target.value
    })
  }
  render () {
    return (
      <div>
        <h1>父组件</h1>
        <input type="text" value={this.state.message} onChange={this.changeHandler} />
        <Son1 message={this.state.message} clickHandler={this.state.clickHandler} />
        <Son2 message={this.state.message} clickHandler2={this.state.clickHandler2}></Son2>
      </div>
    )
  }
}

export default Father
