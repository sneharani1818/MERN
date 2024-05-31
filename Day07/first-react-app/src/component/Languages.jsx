import React from 'react'

const Languages = () => {
    let lang=["Java","Javascript","Kotlin","Python","C"]
  return (
    <div>
        <h1>Best Programming Languages:</h1>
        <ul>
            {lang.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Languages