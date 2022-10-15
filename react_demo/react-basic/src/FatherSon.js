import React from "react"

// 函数式Son
function Son1 (props) {
  // props 是一个对象，里面存放的是父组件传递过来的数据
  // props 是只读的，不能修改
  // props.name = 'lipeng' //error
  // props 可以传递任意类型的数据，数字，字符串，对象，数组，函数，JSX(React元素)
  return (
    console.log('Son1 props userInfo', props.userInfo),
    <div>
      <h1>son1</h1>
      <button onClick={props.clickHandler}>触发父组件传入的函数{props.list}</button>
      {props.list.map((item, index) => <label key={index}>{[index, item]}</label>)}
      {props.userInfo.name}
    </div>
  )
}
// 也可以直接用参数, 进行解构赋值
function Son12 ({ list, userInfo, clickHandler }) {
  return (
    console.log('Son12 props userInfo: ', userInfo, list, clickHandler),
    <div>
      <h1>son12</h1>
      <button onClick={clickHandler}>触发父组件传入的函数</button>
      {list.map((item, index) => <label key={index}>{[index, item]}</label>)}
      {userInfo.name}
    </div>
  )
}

// 类组件Son
class Son2 extends React.Component {
  render () {
    const { clickHandler2, message, child } = this.props
    return (
      console.log('Son2 props', this.props),
      // 可以用解构的方式
      < div >
        <h1>son2</h1>
        {/* 类组件必须通过this关键词去获取,这里的props是固定的 */}
        <button onClick={() => { this.props.clickHandler2("hello") }}>点击我{this.props.message}</button>
        {/* 解构的方式 */}
        <button onClick={() => { clickHandler2("子组件传递的数据：hello") }}>解构方式{message}</button>
        {this.props.child}
      </div >
    )
  }
}

class Father extends React.Component {
  state = {
    message: 'this is father message',
    list: [1, 2, 3],
    userInfo: {
      name: 'zhangsan',
      age: 18
    },
    clickHandler: () => {
      console.log('father click', this)
      this.setState({
        list: [...this.state.list, 1]
      })
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
        <Son1 list={this.state.list} clickHandler={this.state.clickHandler} userInfo={this.state.userInfo} />
        <Son12 list={this.state.list} clickHandler={this.state.clickHandler} userInfo={this.state.userInfo} />
        <Son2 message={this.state.message} clickHandler2={this.state.clickHandler2} child={<span>this is span</span>}></Son2>
      </div>
    )
  }
}

export default Father
