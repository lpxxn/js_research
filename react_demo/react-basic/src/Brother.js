import React from "react"

function Son1 (props) {
  return (
    <>
      <h3>Son1</h3>
      <p>从父组件得到的数据{props.msg}</p>
    </>
  )
}

function Son2 (props) {
  const handleClick = () => {
    console.log('Son2 handleClick', this)
    props.clickHandler("son2" + props.msg)
  }
  console.log('Son2 props', props, this)
  return (
    <>
      <h3>Son2</h3>
      <button onClick={handleClick}>修改父组件的数据</button>
    </>
  )
}


class Brother extends React.Component {
  state = {
    msg: 'hello',
    name: 'Falther'
  }
  updateMsg = (msg) => {
    this.setState({
      msg: msg
    })

  }
  render () {
    return (
      <div>
        <h1>兄弟控件之间传递数据</h1>
        <p>Brother: {this.props.name}</p>
        <Son1 msg={this.state.msg}></Son1>
        <Son2 clickHandler={this.updateMsg} msg={this.state.msg}></Son2>
      </div>
    )
  }
}

export default Brother