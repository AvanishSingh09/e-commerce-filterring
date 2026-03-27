import React from 'react'
import './Colors.css';
import Input from '../../components/Input';
const Colors = ({handlechange}) => {
  return (
    <div>
      <h2 className="sidebar-color-title">Colors</h2>
      <Input
        handlechange={handlechange}
        value=""
        title="All"
        name="test1"
       color="black"
        />
         <Input
        handlechange={handlechange}
        value="black"
        title="Black"
        name="test1"
       color="black"
        />
         <Input
        handlechange={handlechange}
        value="green"
        title="Green"
        name="test1"
       color="green"
        />
         <Input
        handlechange={handlechange}
        value="yellow"
        title="Yellow"
        name="test1"
       color="yellow"
        />
         <Input
        handlechange={handlechange}
        value="red"
        title="Red"
        name="test1"
       color="red"
        />
        <label className="sidebar-label-container">
          <input type="radio" 
          onChange={handlechange}
          value="white"
          name="test1"
          />
          <span className="checkmark" style={{
            background:"white",
            border:"2px solid black",
            color:"black"
          }}></span>
          White
        </label>
    </div>
  )
}
export default Colors