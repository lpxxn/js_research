import './App.css'
import { useState, useEffect } from 'react'
// 首次渲染的时候， 组件内部的代码会被执行一次
// 其中useState也会跟着执行，这里重点注意，初始值只在首次渲染时生效

// 更新渲染 setCount 都会更新
// 1. app组件会两次渲染， 这个函数会两次执行
// 2. useState会两次执行 得到的新的count值不是0，而是修改后的1 模板会用新值渲染

// 重点一句话： useState初始值只在首次渲染生效 后续只要调用setCount整个app中的代码都会执行
// 此时的count每次拿王老师的都是最新的值
function App (props) {
  // count: 数据状态
  // setCount: 修改count的函数（专有函数），第一次是0第二次就是计算后的值 count + 1
  const [count, setCount] = useState(() => {
    return props.count + 1
  })
  // useState 只能出现在函数组件中
  // 不能嵌套在if/for其他函数中（react 按照hooks的调用顺序识别每一个hook）
  console.log('app function count: ', count)

  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([1, 2])
  function test () {
    console.log('list: ', list)
    setFlag(!flag)
    setList([1].concat(list))
  }
  // 只有设置count的时候才会执行
  // count setCount -> render -> userEffect
  useEffect(() => {
    console.log("useEffect")
    document.title = count
    return () => {
      // 组件销毁的时候执行，也就是下一次副作用执行之前执行
      console.log("useEffect return")
    }
  }, [count])

  const [y] = useWindowScrool()
  return (
    <div style={{ height: '12000px' }}>
      <button onClick={() => {
        setCount(count + 1)
        console.log('after set count')
      }}>{count}</button>
      <br></br>
      <p>flag: {flag ? 1 : 0}</p>
      {list.map((item, idx) => <label key={idx}>{[item, idx]}</label>)}
      <button onClick={() => { test() }}>+</button>
      <br></br>
      <span>scroll: {y}</span>
    </div>
  )
}

export function useWindowScrool () {
  const [y, setY] = useState(0)
  // 在滚动发生时，不断的获取滚动值，赋值给y
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}

export default App
