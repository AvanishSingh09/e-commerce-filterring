import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommend'
import Recommend from './Recommended/Recommend'
import Sidebar from './Sidebar/Sidebar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar />
    <Nav />
    <Recommend />
    <Products />
    </>
  )
}

export default App
