import Home from './Home'
import About from './About'

import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Link to="/" > 首页 </Link>
      <Link to="/about" > 关于 </Link>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
