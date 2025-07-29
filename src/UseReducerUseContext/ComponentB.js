import React,{useContext} from 'react'
import ComponentD from "./ComponentD";

import {CountContext} from './ComponentA'

function ComponentB() {
  const countContext = useContext(CountContext);
  console.log(countContext)
  return (
    <div>
         <h1>Component B - {countContext.countState}</h1>
         <button onClick={()=> countContext.countDispatch('increment')} >increment </button>
          <button onClick={()=> countContext.countDispatch('decrement')} >decrement </button>
           <button onClick={()=> countContext.countDispatch('reset')} >reset</button>
      <ComponentD />
       
    </div>
  )
}

export default ComponentB
