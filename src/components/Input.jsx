import React from 'react'

const  Input = ({handlechange,value,title,name,color}) => {
  return (
   <label className="sidebar-label-container">
          <input onChange={handlechange} value={value} name={name} type="radio" />
          <span className="checkmark" style={{backgroundColor:color}}></span>
          {title}
        </label>
  )
}

export default  Input;


