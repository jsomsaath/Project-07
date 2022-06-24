import React, { useState, createContext } from 'react';

export const Auth = createContext(); 

const AuthProvider = (props) => { 
    const [reload, setReload] = useState(false)
    const [token, setToken] = useState('')
    const [userId, setUserId] = useState('')
    const [isAdmin, setAdmin] = useState()

    return (
        <Auth.Provider value= {{token, setToken, userId, setUserId, reload, setReload, isAdmin, setAdmin}}>
            {props.children}
        </Auth.Provider>
    ); 
}

export default AuthProvider; 