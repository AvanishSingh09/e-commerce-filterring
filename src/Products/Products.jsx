import React from 'react'
import './Products.css';
import { AiFillStar } from 'react-icons/ai';
import { FaShoppingBag } from "react-icons/fa";
const Products = ({result}) => {
  return (
   <section className="card-container">
   {result}
   </section>
  )
}

export default Products
