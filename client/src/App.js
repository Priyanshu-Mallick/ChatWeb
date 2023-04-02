import React,{ useState } from 'react'
import Cookies from 'universal-cookie';
import { Auth,AuthProvider } from './components/index';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Chats from './components/Chats';
import Home from './components/Home';
//import Chat from './components/Chat';
import { useAuth  } from './components/AuthContext';
//import { useState } from 'react';
const cookies=new Cookies();

const authToken= cookies.get("token");
//console.log(authToken);

// const apiKey= 'qcr73cmsmcp8';

// const client= StreamChat.getInstance(apiKey);

 const App = () => {
  const [iswelcome, setWelcome]= useState(false);
  const user= useAuth();
  //const [use,setUse]=useState(user);
  const switchmode =() =>{
    setWelcome((previswelcome) =>!previswelcome);
  }
  if(!authToken){
    if(true){ 
      return(
        <>
        
   {/* <br/><br/> */}
        <div>
          <Router>
            <AuthProvider>
              
              <Switch>
              
                
                <Route path="/chats" component={Home} />
                <Route path="/Authh" component={Auth} />
              </Switch>
            </AuthProvider>
          </Router>
        </div></>
        /* <Auth/> )*/)} ;
    
    // return(
    // <div className='auth__form-container_fields' style={{minHeight:"90vh"}}>
    //     <div className='auth__form-container_fields-content' style={{}}>
    //         <p style={{justifyContent:"center"}}>Welcome To MyChat!!</p>
    //         <button  style={{width:"12vh"}} onClick={switchmode}>Continue..
    //         </button>
    //     </div>
    // </div>)
    
  } 
  return (
    <div  className='App'>
  


    </div>
  )
}

export default App;

