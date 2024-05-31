import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <NavLink className="navbar-brand text-white fw-bold mx-4" to="/">Kiet MCA</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/card" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>Card</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/counter" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>Counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/lang" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>Languages</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/student" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>Student</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={({isActive})=>isActive?{color:"green", fontWeight:"bold"}:{color:"white"}}>About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar