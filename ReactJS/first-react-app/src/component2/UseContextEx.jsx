import React from 'react'
import A from './A'
export const nameContext=React.createContext();
const UseContextEx = () => {
  return (
    <div>
        <h1>Use Context Hook Example</h1>
        <nameContext.Provider value="KIET">
        {/* <nameContext.Provider value={[10,20,30]}> */}
            <A/>
        </nameContext.Provider>
    </div>
  )
}

export default UseContextEx