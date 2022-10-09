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
  click = function (e, msg) {
    console.log('click', e, msg)
  }
  render () {
    return <div>HelloComponent<button onClick={(e) => this.click(e, "aabc")}>Btn</button></div>
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