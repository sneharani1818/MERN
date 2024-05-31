import React, { useContext } from 'react'
import { nameContext } from './UseContextEx';
const C = () => {
    const name=useContext(nameContext);
    return (
    <div>
        <h2>C component</h2>
        <h2>Name={name}</h2>
        {/* <h2>Name={name[0]}</h2>  //in case of array*/}
    </div>
  )
}

export default C