import React, { useState } from 'react'

const UseStateEx = () => {
    // let name="KIET";
    const [userInfo, setUserInfo]=useState({name:"KIET",  class:"MCA"});
    const [counter, setCounter]=useState(0);
    // const [name, setName]=useState("KIET");
    const changeName=()=>{
        setUserInfo({...userInfo, name:"Kiet MCA"});//so that other original values remain as they were.
        console.log(userInfo.name);
        // console.log(userInfo.class);
        // setName("KIET MCA");
        // console.log(name);
        // u can use promise here resolve and reject 
    };
  return (
    <div>
        <h1>Name:{userInfo.name}</h1>
        <h1>Class:{userInfo.class}</h1>
        <button className='btn btn-primary' onClick={changeName}>Change Name</button>
        <h2>Counter:{counter}</h2>
        <button className='btn btn-primary' onClick={()=>{setCounter((prevCounter)=>prevCounter+1);setCounter((prevCounter)=>prevCounter+1);setCounter((prevCounter)=>prevCounter+1)}}>Increment Counter+3</button>
    </div>
  );
};

export default UseStateEx