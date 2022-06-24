import React, {useState} from "react"
import loginIcon from '../assets/loginIcon.png'
import emailIcon from '../assets/emailIcon.png'
import passwordIcon from '../assets/passwordIcon.png'
import axios from '../api/axios'
import '../styles/login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')

        axios({
            method: 'post',
            withCredentials: true, 
            data: {
                email,
                password,
            },
        })
        
        .then((res) => {
            if (res.data.errors) {
                emailError.innerHTML = res.data.error.email
                passwordError.innerHTML = res.data.error.password
            } else {
                window.location = '/'
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

return (
    <div className="loginBox">
        <img src={loginIcon} alt='Icon login' className="loginIcon" />
        <form className="form" onSubmit={handleSubmit}>
            <div className="loginFields">
                <div className="usernameField">
                    <img src={emailIcon} alt='Icon email' className="userIcon" />
                        <input type='text' name='email' id='email' placeholder='email' className="email" onChange={(event) =>setEmail(event.target.value)} value={email} />
                        <div className="email error"></div>
                </div>
                <div className="passwordField">
                    <img src={passwordIcon} alt='Icon password' className="passwordIcon" />
                    <input type='text' name='password' id='password' placeholder='password' className="password" onChange={(event) => setPassword(event.target.value)} value={password} />
                    <div className="password error"></div>
                </div>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>

)
}

export default Login
