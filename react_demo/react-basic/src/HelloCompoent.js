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
  render () {
    // render 方法在react内部已经做了修正，他的this就是当前组件
    console.log('父级函数的this指向为：', this)
    return (<div>
      HelloComponent {this.name} age: {this.state.age} count: {this.state.count}
      <br />
      <ul>
        {this.state.list.map((item, index) => { return <li key={item} >{item}</li> })}
      </ul>
      <br />
      <button onClick={(e) => this.click(e, "aabc")}>Btn</button>
      <br />
      <button onClick={this.errHandler}>有问题的方法</button>
      <br />
      <button onClick={() => { this.errHandler() }}>修复方法2</button>
    </div>)
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
    </div>
  )
}

export default HelloComponent2