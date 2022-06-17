import '../styles/Header.css'
import React from "react"
import logo from '../assets/icon-left-font-monochrome-black.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='header'>
                <div className='title flexcenter'>
                    <h1>Welcome to </h1>
                    <img src={logo} alt='Groupomania logo' className='logo'/>
                </div>
            <nav className='menu flexcenter'>
                <Link className='homeLink flexcenter decorationnone' to='/login'>Login</Link>
                <Link className='homeLink flexcenter decorationnone' to='/signup'>Sign up</Link>
            </nav>
            </div>
        </header>
    )
}

export default Header