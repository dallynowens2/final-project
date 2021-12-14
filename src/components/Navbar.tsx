import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/about"> About</NavLink><br/>
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}

export default Navbar
