import React from 'react'
import Info from "./Info"

const ControlledInfo = () => {
    const lang=["Java","Javascript","Kotlin","Python","C++"]
  return (
    <div>
        {/* Info(lang); */}
        <Info lang={lang}/>
    </div>
  )
}

export default ControlledInfo