import React, {useEffect, useState} from 'react'

const UseEffectEx = () => {
    const [name, setName]=useState("KIET");
    const [course, setCourse]=useState("MCA");
    const changeName=()=>{
        setName("KIET MCA");
    };
    const changeCourse=()=>{
        setCourse("MCA Kiet");
    }
    useEffect(()=>{
        console.log("Use Effect Hook");
    },[]);
    useEffect(()=>{
        console.log(name);
    },[name]);
  return (
    <div>
        <h1>Use Effect Example</h1>
        <h2>Name:{name}</h2>
        <button className='btn btn-danger' onClick={changeName}>Refresh</button>
        <h2>Class:{course}</h2>
        <button className='btn btn-danger' onClick={changeCourse}>Change Class</button>
    </div>
  )
}

export default UseEffectEx