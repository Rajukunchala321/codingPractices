import React from 'react'
import ComponentF from './ComponentF';
export const EcomponentContext = React.createContext()
function ComponentE() {
  return (
    <>
    <EcomponentContext.Provider value="this is EcomponentContext" >
         <ComponentF />
    </EcomponentContext.Provider>
     
    </>
  )
}

export default ComponentE
