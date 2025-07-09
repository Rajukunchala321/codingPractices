import React, {useContext} from 'react'
import {UserContent} from '../App';
import {EcomponentContext} from './ComponentE';
function ComponentF() {
  const UserContentValue = useContext(UserContent);
  const EcomponentContextValue = useContext(EcomponentContext);
  return (
    <div>
      <h2>{UserContentValue}</h2>
      <h2>{EcomponentContextValue}</h2>
      <h2>This is ComponentF</h2>
    </div>
  )
}

export default ComponentF
