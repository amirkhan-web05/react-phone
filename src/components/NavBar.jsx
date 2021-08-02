import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
 return (
    <nav className='nav'>
        <NavLink className='logo' to='/'>
            <h2>LogoPages</h2>
        </NavLink>
        <NavLink className='nav-link' to='/'>
            Home
        </NavLink>
        <NavLink className='nav-link' to='/about'>
            About
        </NavLink>
        <NavLink className='nav-link' to='/news'>
            News
        </NavLink>
        <NavLink className='nav-link' to='/services'>
            Services
        </NavLink>
        <NavLink className='nav-link' to='/contacts'>
            Contacts
        </NavLink>
    </nav>
 )   
}

export default NavBar