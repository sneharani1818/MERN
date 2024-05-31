import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    const goRoute=()=>{
        navigate("/");
        // navigate(-1)
    }
  return (
    <div className='container'>
        <h1>This is Example of React Router DOM</h1>
        <button className='btn btn-success' onClick={goRoute}>Home</button>
    </div>
  )
}

export default About