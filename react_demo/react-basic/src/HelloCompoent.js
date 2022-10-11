import React from "react"

// 函数组件创建和渲染
function Hello () {
  const clickHandler = () => {
    console.log('hello click')
  }
  return <div>Hello <button onClick={clickHandler}>Btn</button></div>
}

// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component {
  // click = function (e, msg) {
  //   console.log('click', e, msg)
  // }
  click = (e, msg) => {
    console.log('click', e, msg)
    // 注意，不可以直接做赋值修改，不然不会体现到页面上，必须通过 setState方法
    //this.state.count++
    this.setState({
      count: this.state.count + 1
    })

    this.name = this.name + this.state.count
  }
  state = {
    count: 0
  }
  name = 'hello'
  render () {
    return <div>HelloComponent {this.name} count: {this.state.count}<button onClick={(e) => this.click(e, "aabc")}>Btn</button></div>
  }
}

function HelloComponent2 () {
  return (
    <div>
      <Hello />
      <HelloComponent />
    </div>
  )
}

export default HelloComponent2