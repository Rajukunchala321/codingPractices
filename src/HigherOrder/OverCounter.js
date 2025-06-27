import React  from "react";
import HigherOrderComponent from './HigherOrderComponent'

const OverCounter =({value, incrementCount})=>{
 
  return(
    <>
    <h1 onMouseOver={incrementCount}>Hover {value} times</h1>
    </>
  )
}

export default HigherOrderComponent(OverCounter, 5)