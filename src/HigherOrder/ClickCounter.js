import React from "react";
import HigherOrderComponent from './HigherOrderComponent'
const ClickCounter = ({value, incrementCount})=>{
    
  return(
    <>
    <button onClick={incrementCount}>Click {value} times</button>
    </>
  )
}
export default HigherOrderComponent(ClickCounter, 10)