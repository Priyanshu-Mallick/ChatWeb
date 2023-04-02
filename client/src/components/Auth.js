import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../App.css';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";
import { auth } from './firebase';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { AuthProvider } from './index'
import Chats from './Chats';

const cookies = new Cookies();
const initialState = {
  fullName: '',
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
}

const Auth = () => {

  
    const[form,setForm]=useState(initialState);
    const [isSignup, setIsSignup]= useState(true);
    const handleChange= (event) => {
      setForm({...form,[event.target.name]:event.target.value});
    }

    const switchMode =() =>{
      setIsSignup((prevIsSignup) =>!prevIsSignup);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      const { fullName, username, phoneNumber,password,confirmPassword }=form;

      const URL = '';//backend url

      const { data:{token,hashedPassword } }=await axios.post(`${URL}/${isSignup ?'':''}`,{ username,password,fullName,phoneNumber,confirmPassword})

      //for signin cookies
      cookies.set('token',token);
      cookies.set('username',username);
      cookies.set('fullName',fullName);

      //for signup cookies
      if(isSignup)
      {
        cookies.set('phoneNumber',phoneNumber);
        cookies.set('hashedPassword',hashedPassword);
      }
      window.location.reload();
    }
  return (
    <>
    <div className=''>
       <div className='nav-bar'>
           <div className='logo-tab'>
               MyChat
           </div>
       
   </div><div className="auth__form-container">
      
      <div className="auth__form-container_fields">
        
        <div className="auth__form-container_fields-content">
          
          <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">User Name</label>
              <input
                name="username"
                type="text"
                placeholder="User Name"
                onChange={handleChange}
                required />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">phone Number</label>
                <input
                  name="phoneNumber"
                  type="number"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required />
              </div>
            )}
            <div className='auth__form-container_fields-content_button'>
              <button>{isSignup ? "Sign Up" : "Sign in"}</button>
            </div>

          </form>
          <div className='auth__form-container_fields-account'>
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? ' Sign In' : ' Sign Up'}
              </span>
            </p>
          </div>
          {isSignup && (
            <><div onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}  style={{ color: "blue" }}>
              <span>
                <GoogleOutlined style={{color:"blue"}}/> Sign in with Google

              </span>
            </div>
            </>
          )}
        </div>
      </div>

    </div>
    </div></>
  )
}

export default Auth