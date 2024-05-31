import React from 'react'
import ChangeName from "./component/ChangeName"
import Counter from "./component/Counter"

const ChangeComponent = () => {
    const [name,setName] = useState("KIET");
  const [sname,setSName] = useState("MCA");
  return (
    <div>
        <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
      <ChangeName name={sname} onUpdate={()=>setSName("MCA KIET")}/>
    </div>
  )
}

export default ChangeComponent