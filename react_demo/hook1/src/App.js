import './App.css'
import { useState } from 'react'

function App () {
  const [count, setCount] = useState(1)
  return (
    <div >
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
    </div>
  )
}

export default App
