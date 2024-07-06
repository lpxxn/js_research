import React, { Component, useContext } from 'react'
import { BrowserRouter, Route, RouterContext} from './router/MyRouter'
function Home () {
  return <h2>Home</h2>
}

function About () {
  return <h2>About</h2>
}
function User () {
  return <h2>User</h2>
}

function App () {
  // get context

  // useContext 钩子只能在 Context 提供者的子组件树中使用。如果在 Context 提供者之外使用，它将返回 undefined。确保你的组件被正确地包裹在 Context 提供者中。
  const ctx1 = useContext(RouterContext);
  console.log('App ctx1', ctx1);
  // BrouserRouter 是一个顶层容器，职责：
  // 将react生命周期和history对象结合起来
  // 将path 和Route进行关联
  // 对path 进行管理
  // return(<BrowserRouter>
  //       <button onClick={() => ctx.goPath('/')}>首页</button>
  //       <button onClick={() => ctx.goPath('/about')}>关于</button>
  //       <button onClick={() => ctx.goPath('/user')}>用户</button> 
  //       <Route path="/" component={Home} />
  //       <Route path="/about" component={About} />
  //       <Route path="/user" component={User} />
  // </BrowserRouter>)

  return(
    <BrowserRouter>
      <RouterContext.Consumer>
          {
            (ctx) => {
              console.log('App ctx', ctx);
              return (
                <div>
                  <button onClick={() => ctx.goPath('/')}>首页</button>
                  <button onClick={() => ctx.goPath('/about')}>关于</button>
                  <button onClick={() => ctx.goPath('/user')}>用户</button> 
                  <Route path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/user" component={User} />
                </div>
              )
            }
          }
      </RouterContext.Consumer>
    </BrowserRouter>
  )
}

export default App;