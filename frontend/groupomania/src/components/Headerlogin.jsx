import logo from '../assets/icon-left-font.png'
import '../styles/header.css'
import { Link } from 'react-router-dom'

function HeaderLogin() {
    return (
        <header>
            <div className='header'>
            <div className='title'>
            <h1>Groupomania</h1>
            <img src={logo} alt="logo Groupomania" className='logo'/>
            </div>
            <nav className='menu'>
                <Link to='/user'>Profil</Link>
                <Link to='/logout'>Log out</Link>
            </nav>
           <div className='newPost'>
            Start posting ! 
            </div>
            </div> 
        </header>
    )
}

export default HeaderLogin