import React, { createRef } from "react"

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
      count: this.state.count + 1,
      // ... 展开运算符，展开对象，可以展开数组
      list: [...this.state.list, 'item' + this.state.count]
    })

    this.setState({
      person: {
        ...this.state.person,
        age: this.state.person.age + 1
      }
    })
    this.name = this.name + this.state.count
  }
  state = {
    count: 0,
    age: 18,
    list: [1, 2, 3],
    person: {
      name: 'zhangsan',
      age: 18
    }
  }
  name = 'hello'
  liClick = (e, id) => {
    console.log('liClick', id)
  }
  render () {
    // render 方法在react内部已经做了修正，他的this就是当前组件
    console.log('父级函数的this指向为：', this)
    return (<div>
      HelloComponent {this.name} age: {this.state.age} count: {this.state.count}
      <br />
      <ul>
        {this.state.list.map((item, index) => { return <li key={item} onClick={(e) => { this.liClick(e, item) }}>{item}</li> })}
      </ul>
      <br />
      <button onClick={(e) => this.click(e, "aabc")}>Btn</button>
      <br />
      <button onClick={this.errHandler}>有问题的方法</button>
      <br />
      <button onClick={this.errHandler2}>修复方法1</button>
      <button onClick={() => { this.errHandler() }}>修复方法2</button>
      <br />
      <p>下面是受控组件的知识点</p>
    </div>)
  }
  errHandler2 = () => {
    console.log(this)
  }
  errHandler () {
    console.log(this)// this 为undefine this.SetState就会报错, class默认是strit模式，this 指向的undefine,所以需要手动绑定/箭头函数 ES6文档
    // 箭头函数永远指向父作用域，this 指向是固定的，普通函数的this指向是可变的，指向调用他的对象
    // 如果一定要这么，可以在构造函数里做绑定如下：
  }
  constructor() {
    super()
    // 修复方法1
    // 使用bind强行修正this永远指向当前组件实例对象, call, apply也可以
    // 或者用上面的在onClick里用箭头函数，箭头函数永远指向父作用域
    // this.errHandler = this.errHandler.bind(this)
  }

}

function HelloComponent2 () {
  return (
    <div>
      <Hello />
      <HelloComponent />
      <InputElement />
      <InputElement2 />
    </div>
  )
}
// 受控组件,是指表单元素的值受到react的控制，如下面的InputElemt
class InputElement extends React.Component {
  // 1 声明用来控制input value的react 组件自己的状态
  // 只能叫state，不能叫其他名字，因为react内部有一些方法，会去读取这个状态，如果不叫state，就会找不到，报错
  state = {
    message: 'this is message'
  }
  changeHandler = (e) => {
    // 2 在事件处理函数中，修改状态
    //this.stateValues.message = e.target.value
    // 3 重新渲染, 如果不重新渲染，页面不会更新，一直是初始值
    //this.setState({})
    // 4 但是，上面的写法，不是react推荐的写法，推荐使用下面的写法
    // 也可以这么写
    // 只能叫setState，不能叫其他名字，因为react内部有一些方法，会去读取这个状态，如果不叫setState，就会找不到，报错
    this.setState({
      message: e.target.value
    })
    console.log("current message value: ", this.state.message)
  }
  render () {
    return (
      <input type="text" value={this.state.message} onChange={this.changeHandler} />
    )
  }
}

// 非受控组件，是指表单元素的值不受react的控制,通过DOM手动操作来获取文本框的值，不受react控制
class InputElement2 extends React.Component {
  // 1. 导入createRef 函数，最上面 import React, { createRef } from 'react'
  // 2. 调用createRef函数，创建一个ref对象，保存到属性里
  msgRef = createRef()
  getValue = () => {
    // 4. 通过ref.current获取到真实的DOM元素，其中msgRef.current.value就是文本框的值
    console.log(this.msgRef.current)
    console.log(this.msgRef.current.value)
  }
  render () {
    return (
      <>
        <p>非受控组件，是指表单元素的值不受react的控制</p>
        {/* // 3. 给input元素，添加ref属性，值为上面创建的ref对象msgRef */}
        <input type="text" ref={this.msgRef}></input>
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    )
  }
}
export default HelloComponent2