import React from 'react'
import './Price.css';
import Input from '../../components/Input.jsx';
const Price = ({handlechange}) => {
  return (
   <div className="ml">
    <h2 className="sidebar-title-price">Price</h2>
        <Input
        handlechange={handlechange}
        value=""
        title="ALL"
        name="test2"
        type={"radio"}
        />
     <Input
        handlechange={handlechange}
        value={50}
        title="$0-50"
        name="test2"
        type={"radio"}
        />
        <Input
        handlechange={handlechange}
        value={100}
        title="$50-100"
        name="test2"
        type={"radio"}
        />
        <Input
        handlechange={handlechange}
        value={150}
        title="$100-150"
        name="test2"
        type={"radio"}
        />
         <Input
        handlechange={handlechange}
        value={200}
        title="$150-200"
        name="test2"
        type={"radio"}
        />
   </div>
  )
}

export default Price
