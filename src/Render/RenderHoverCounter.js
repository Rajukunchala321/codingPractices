import React from "react";

const RenderHoverCounter =({handleCounter, count})=>{
    return(
        <>
        <h1 onMouseOver={handleCounter}>Render Hover {count} times</h1>
        </>
    )
}
export default RenderHoverCounter;