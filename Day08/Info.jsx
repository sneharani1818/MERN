import React from 'react'

const info = (props) => {
    let {lang}=props;
  return (
    <div>
        <h1>Top Programming Langugages</h1>
        {lang.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default info