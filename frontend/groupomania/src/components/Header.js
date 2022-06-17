import '../styles/Header.css'
import React from "react"
import logo from '../assets/icon-left-font.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='header'>
                <div className='title'>
                    <h1>Groupomania</h1>
                    <img src={logo} alt='Groupomania logo' className='logo'/>
                </div>
            <nav className='menu'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign up</Link>
            </nav>
            </div>
        </header>
    )
}

export default Header