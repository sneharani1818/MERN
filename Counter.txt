import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);//variable that can update value/can be rendered
    const checkValue=()=>{
        return count===0?"Zero":count;
    }
    const checkCounter=()=>{
        return count===0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 rounded text-dark";
    };
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
        // count===0?setCount(0):setCount(count-1);
    }
    useEffect(()=>{
        console.log(count);
    },[count]);
  return (
    <div className="container mt-3">
        <button className="btn btn-primary" onClick={decrement}>Decrement</button>
        <span className={checkCounter()}>{checkValue()}</span>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter