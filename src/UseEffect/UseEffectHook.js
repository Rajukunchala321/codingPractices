import React from "react";

import {useState, useEffect} from 'react'

function UseEffectHook() {
  const [count , setCount] = useState(0);
  useEffect(()=>{
    document.title =`yOu clicked ${count} times`
  })
  const ClickUpdation =()=>{
    setCount(count+1)
  }
  return (
    <div>
      <button onClick={ClickUpdation} >useEffect Clicked {count} times</button>
    </div>
  )
}

export default UseEffectHook
