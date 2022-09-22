import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>

            <NavLink to="/home" className='nav-link'>Home</NavLink>
            <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
            <NavLink to="/contact" className='nav-link'>Contact</NavLink>

        </nav>
    )
}

export default Navbar