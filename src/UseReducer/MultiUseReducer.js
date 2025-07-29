import React, {useReducer} from 'react'

const initalState = {
    firstCounter:0,
    secondCouter:10,
}
const reducer =(state, action)=>{
    switch(action.type){
        case 'increment': 
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
            case 'increment2': 
            return {...state, secondCouter: state.secondCouter + action.value}
        case 'decrement2':
            return {...state, secondCouter: state.secondCouter - action.value}
        case 'reset' :
            return initalState
        default:
            return state    
           
    }
}

function MultiUseReducer() {
    const [count, dispatch] = useReducer(reducer, initalState)
    console.log(count)
    
  return (
   <>
    <div>
      <div>Counter - {count.firstCounter}</div>
      <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement', value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset', value:1})}>Reset</button>
    </div>
    <div>
      <div>Counter - {count.secondCouter}</div>
      <button onClick={()=>dispatch({type:'increment2', value:5})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement2', value:5})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset', value:0})}>Reset</button>
    </div>
    </>
  )
}

export default MultiUseReducer;