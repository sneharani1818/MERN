import React from 'react'
import {useEffect, useState } from "react";

import Counter from './Counter';

const MyCounter = () => {
    const [counter, setCounter]=useState(
        [
            {id:1,count:0},
            {id:2,count:0},
            {id:3,count:0},
            {id:4,count:0},
            // {id:5,count:0},
        ]
    );

    const increment=(acounter)=>{
        const lcounter=[...counter];
        const index=lcounter.indexOf(acounter);
        lcounter[index].count++;
        setCounter(lcounter);
        // setCount(counter.count+1);
    };
    const decrement=(acounter)=>{
        if(acounter.count>0){
            // setCount(counter.count-1);
            const lcounter=[...counter];
            const index=lcounter.indexOf(acounter);
            lcounter[index].count--;
            setCounter(lcounter);
        }
        // count===0?setCount(0):setCount(count-1);
    };
    const deletecounter=(acounter)=>{
        const lcounter=counter.filter(item=>item!==acounter);
        setCounter(lcounter);
    };
    const reset=()=>{
        const lcounter=counter.map(item=>{
            item.count=0;
            return item;
        })
        setCounter(lcounter);
    };

    const getcounter=()=>{
        return counter.filter(item=>item.count>0).length;
    }

  return (
    <div className="container mt-3">
        <div>
        <button className="btn btn-success" onClick={reset}>Reset</button>
        <p className='fw-bold text-center'>
            Active Counter: {getcounter()}
        </p>
        </div>
        {counter.map(item=>(
            <Counter key={item.key}
            counter={item}
            decrement={decrement}
            increment={increment}
            deletecounter={deletecounter}/>
        ))}
    </div>
  )
}


export default MyCounter