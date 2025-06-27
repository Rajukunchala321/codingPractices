import React, {useState} from "react"

const HigherOrderComponent =(OrginalComponent, Increment)=>{
     function NewComponent(props) {
        const [value, setValue] = useState(0);
  const incrementCount =()=>{
    setValue((prevState)=>(
       prevState+Increment
    ))
  }
        return(
            <OrginalComponent value={value} incrementCount={incrementCount}  {...props}/>
        )
     }
    return NewComponent
}
export default HigherOrderComponent