import React,{ useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from './firebase';
import { useAuth  } from './AuthContext';
import axios from 'axios';

const Chats = () => {
    const history = useHistory();
    const { user }= useAuth();
    const [loading,setLoading]= useState(true)
    console.log(user);
    const handleLogout = async() => {
        await auth.signOut();

        history.push('/Authh')
    }

    useEffect(()=>
    {
        if(!user) {
            history.push('/Authh')

            return;
        }

        axios.get('https://api.chatengine.io/users/me',{
            headers:{
                "project-id":"b6bc5389-a72b-4f43-95e4-163a56dc78b6",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(()=> {
            setLoading(false);
        })
        .catch(()=> {
            let formdata = new FormData();
            formdata.append('email',user.email);
            formdata.append('username',user.email);
            formdata.append('secret',user.uid);
            
                axios.post('https://api.chatengine.io/users',formdata,
                {headers:{"private-key":"e6a63bdc-762d-4b4d-a9e6-b8e32a946629"}})
                .then(() => setLoading(false))
                .catch((error)=> console.log(error))
            
        })
    }, [user, history]);

    //if(!user || loading) return 'Loading...';
  return (
    <div className='chats-page'>
       
        <div className='nav-bar'>
            <div className='logo-tab'>
                MyChat
            </div>
            <div onClick={handleLogout} className='logout-tab'>
                Logout
            </div>
        </div>
        <ChatEngine 
        height="clac(100vh-66px)"
        style={{ fontFamily: 'sansrif' }}
        projectID ="b6bc5389-a72b-4f43-95e4-163a56dc78b6"
        userName={user.email}
        userSecret={user.uid} />
    </div>
  )
}

export default Chats