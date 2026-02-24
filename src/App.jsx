import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommend from './Recommended/Recommend'
import Sidebar from './Sidebar/Sidebar'
// import products from './db/data';
function App() {
//      const [selectedCategory,setSelectedCategory]=useState(null);
//      const [query,setQuery]=useState("");
//      const handleinputchange=event=>{
//       setQuery(event.target.value)
//    }
//    const filteredItems=products.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1)
//   );
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
