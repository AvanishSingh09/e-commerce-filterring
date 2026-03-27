import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products.jsx'
import Recommend from './Recommended/Recommend.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import products from './db/data.jsx';
import Card from './components/Card.jsx'
function App() {
     const [selectedCategory,setSelectedCategory]=useState(null);
     const [query,setQuery]=useState("");
     //input filter
     const handleinputchange=event=>{
      setQuery(event.target.value)
   }
   const filteredItems=products.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1)
  );
  //radio filter
    const handlechange = event => {
      setSelectedCategory(event.target.value)   
    }
    //button-filter
    const handleClick=event=>{
      setSelectedCategory(event.target.value)
    }
    function filtereddata(products,selected,query){
      let filteredProducts = products;
      if(query){
        filteredProducts=filteredItems;
      }
      if(selected){
        filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected );
      }
      return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
          <Card key={Math.random()}
          img={img}
          title={title}
          star={star} 
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
          />
      ));
    }
    const result=filtereddata(products,selectedCategory,query);
      return (
        <>
    <Sidebar handlechange={handlechange}/>
    <Nav  query={query}handlechange={handlechange}/>
    <Recommend handleClick={handleClick}/>
    <Products result={result}/>
    </>
  )
}
export default App
