import React from 'react'
import { useContext,useState,useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { auth } from './firebase';

export const AuthContext =React.createContext();
export const useAuth = () => useContext(AuthContext);

 const AuthProvider = ({ children })=>
{
    const [loading, setLoading] =useState(true);
    const [user,setUser] =useState(null);
    const history = useHistory();
    
    useEffect(() => {
        auth.onAuthStateChanged((user) =>
        {
            setUser(user)
            console.log(user);
            setLoading(false);

            if(user){history.push('/chats')} 
            else {history.push('/Authh')}
            
        })
    }, [user, history]);

    const value ={ user };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;