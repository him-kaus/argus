import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'
import CompA from './CompA'

const Menu2 = () => {
  return (
    <>
        <div className='main_div'>
            <NavLink to='/' active className="active_class">About Us</NavLink>
            <NavLink to='/Services' active className="active_class">Services</NavLink>
            <NavLink to='/CompA' active className="active_class">User</NavLink>
        </div>
    </>
  )
}

export default Menu2