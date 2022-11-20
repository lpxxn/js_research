import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


function Example () {
  console.log("---------------")
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('hello')

  useEffect(() => {
    console.log("useEffect, 每次渲染后都会执行")
    document.title = `You clicked ${count} times`
  })

  useEffect(() => {
    console.log("empty [], 只会第一次渲染后执行")
  }, [])

  useEffect(() => {
    console.log("[count], 第一次渲染后执行，count变化后执行")
  }, [count])

  useEffect(() => {
    console.log("[name]")
  }, [name])

  useEffect(() => {
    console.log("return")
    return () => {
      console.log("return function, 点击button之后执行")
    }
  })

  useEffect(() => {
    console.log("return + [], 下面的return function不会执行")
    return () => {
      console.log("return function + [] 不执行")
    }
  }, [])

  console.log("********end*********")
  return (
    <div>
      <p> You clicked {count} times, current name {name}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>)

}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Example />
    <App />
  </div>
)
