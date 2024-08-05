import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Authcontext } from '../context/Login_context'
import Router from '../router/Router'
import Credintial from '../pages/Credintial';
function Layout() {
  const{user}=useContext(Authcontext);
  return (
    user?
    <div style={{display:'flex',flexDirection:'column'}}>
    

    <Navbar/>
    <Router/>
    </div>:<Credintial/> 
  )
  
}

export default Layout