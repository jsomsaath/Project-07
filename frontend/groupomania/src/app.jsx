import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header'
import Auth from './context/Auth'
import Dashboard from './pages/Dashboard'
import {hasAuth} from './api/authApi'
import AuthRoute from './components/AuthRoute'
import './styles/app.css'

function App() {
    const [isAuth, setIsAuth] =useState(hasAuth())
    if(!isAuth) {
        return <Login setIsAuth={setIsAuth} />
    }
    return (
        <Auth.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
        <React.Fragment>
            <Header />
        </React.Fragment>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
        </BrowserRouter>
        </Auth.Provider>
    )
}

export default App
