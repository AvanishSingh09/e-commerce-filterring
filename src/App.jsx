import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommend from './Recommended/Recommend'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Products />
    <Recommend />
    </>
  )
}

export default App
