import React, { useState } from "react"
import emailIcon from '../assets/emailIcon.png'
import passwordIcon from '../assets/passwordIcon.png'
import userIcon from '../assets/userIcon.png'
import signupIcon from '../assets/signupIcon.png'
import '../styles/login.css'

const Signup = () => {

    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    } 

    return (
        <div className="loginBox flexcolumaround">
            <form className="form">
                <h1>New here ? It's time to sign up !</h1>
                <div className="flexcenter">
                <img src={userIcon} alt='User icon' className="userIcon" />
                <input 
                type='name' 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flexcenter">
                <img src={emailIcon} alt='Icon email' className="userIcon" />
                <input 
                type='email' 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="flexcenter">
                <img src={passwordIcon} alt='Icon password' className="passwordIcon" />
                <input 
                type='password' 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flexcenter button">
                <img src={signupIcon} alt='Icon signup' className="loginIcon" />
                    <form className="form" onSubmit={handleSubmit}>
                    <button className="loginButton" type="submit">Sign up</button>
                    </form>
                </div>
            </form>
        </div>
    )
}

export default Signup