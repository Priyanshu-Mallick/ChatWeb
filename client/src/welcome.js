import React from 'react'
import {Auth } from './components/index';
const Welcome = () => {
    const handleClick=() =>{
        return( <Auth/>);
    }
  return (
    <div className='auth__form-container_fields'>
        <div className='auth__form-container_fields-content'>
            <p style={{justifyContent:"center"}}>Welcome To MyChat!!</p>;
            <button className='' onClick={handleClick}>Continue..
            </button>
        </div>
    </div>
  )
}

export default Welcome