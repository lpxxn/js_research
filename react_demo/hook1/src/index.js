import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// stritMode 会发送两次请求，因为严格模式下，会多次渲染？？？没明白
function EffectRequestTest () {
  useEffect(() => {
    console.log("useEffect 发送网络请求")
    async function loadData () {
      const res = await fetch('https://api.github.com/users')
      const data = await res.json()
      console.log('data: ', data)
    }
    loadData()
  }, [])
  return (<div>

  </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <div>
    <App count={11} />
    <EffectRequestTest />
  </div>
  // </React.StrictMode>
);

