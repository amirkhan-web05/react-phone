import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import shoppingBasket from './images/shopping-basket.svg'

const NavBar = () => {
 const {totalCard} = useSelector(({cart}) => cart)

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
        <NavLink className='shop-basket' to='/shopcart' >
            <div>
                <img className='shop-basket-icon' src={shoppingBasket} alt="" />
            </div>
            <div className='shop-price d-flex align-items-center'>
                <span className='nav-total'>{totalCard}</span>
            </div>
        </NavLink>
    </nav>
 )   
}

export default NavBar