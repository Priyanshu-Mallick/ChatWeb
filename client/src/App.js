import React,{ useState } from 'react'
import Cookies from 'universal-cookie';
import { Auth} from './components/index';
//import { useState } from 'react';
const cookies=new Cookies();

const authToken= cookies.get("token");
//console.log(authToken);

// const apiKey= 'qcr73cmsmcp8';

// const client= StreamChat.getInstance(apiKey);

 const App = () => {
  const [iswelcome, setWelcome]= useState(false);

  const switchmode =() =>{
    setWelcome((previswelcome) =>!previswelcome);
  }
  if(!authToken){
    if(iswelcome){ return <Auth/>;}
    return(
    <div className='auth__form-container_fields' style={{minHeight:"90vh"}}>
      {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        <div className='auth__form-container_fields-content' style={{}}>
            <p style={{justifyContent:"center"}}>Welcome To MyChat!!</p>
            <button  style={{width:"12vh"}} onClick={switchmode}>Continue..
            </button>
        </div>
    </div>)
  } 
  return (
    <div  className='App'>
  


    </div>
  )
}

export default App;

