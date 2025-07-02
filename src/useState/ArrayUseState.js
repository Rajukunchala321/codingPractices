import React, {useState} from "react";



const ArrayUseState = ()=>{
    const [item, setItem] = useState([]);

     const handleOnClick =()=>{
        setItem([...item, {
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
     }
    return(
        <>
         <button onClick={handleOnClick}>Add Item</button>
         {
            item.map((each)=>(
                <div key={each.id}>{each.value}</div>
            ))
         }
        </>
    )

}
export default ArrayUseState
