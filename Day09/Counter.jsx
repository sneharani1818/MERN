import React, { useEffect, useState } from 'react'

const Counter = (props) => {
    const {counter,increment, decrement, deletecounter}=props;
    const checkValue=()=>{
        return counter.count===0?"Zero":counter.count;
    }
    const checkCounter=()=>{
        return counter.count===0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 rounded text-dark";
    };
    
    
  return (
    <div className="container mt-3">
        <button className="btn btn-primary" onClick={()=>decrement(counter)}>Decrement</button>
        <span className={checkCounter()}>{checkValue()}</span>
        <button className="btn btn-primary" onClick={()=>increment(counter)}>Increment</button>
        <button className="btn btn-primary mx-3" onClick={()=>deletecounter(counter)}>Delete</button>
    </div>
  )
}

export default Counter