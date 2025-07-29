import React,{useContext} from 'react'
import ComponentE from "./ComponentE";
import {CountContext} from './ComponentA'
function ComponentC() {
  const countContext = useContext(CountContext);
    console.log(countContext)
  return (
    <div>
        <h1>Component C</h1>
        <button onClick={()=> countContext.countDispatch('increment')} >increment </button>
          <button onClick={()=> countContext.countDispatch('decrement')} >decrement </button>
           <button onClick={()=> countContext.countDispatch('reset')} >reset</button>
      <ComponentE />
       
        
    </div>
  )
}

export default ComponentC
