import React from "react"


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

class Father extends React.Component {
  state = {
    message: 'this is father message',
    clickHandler: () => {
      console.log('father click', this)
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
      </div>
    )
  }
}

export default Father
