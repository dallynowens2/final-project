import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="container-fluid justify-content-end">
        <div >
            <NavLink to="/" className='btn btn-primary m-2'>Home</NavLink>
            <NavLink to="/about" className='btn btn-primary m-2' > About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
