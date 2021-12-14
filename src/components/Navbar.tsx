import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/about"> About</Link><br/>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Navbar
