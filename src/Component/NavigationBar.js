import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavigationBar.css'

function NavigationBar() {
    return (
        <div>
            <nav className='navbar'>
                <h2 className='logo'>Logo</h2>
                <ul className='ul'>
                    <NavLink to='/t20' className="item">T-20</NavLink>
                    <NavLink to='/odi' className="item">Odi</NavLink>
                    <NavLink to='/test' className="item">Test</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar
