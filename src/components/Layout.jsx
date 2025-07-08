import React, { useContext } from 'react'
import Navbar from './Navbar'

import Router from '../router/Router'
import Credintial from '../pages/Credintial';
import { useSelector }  from 'react-redux';
function Layout() {
const user=useSelector(state=>state.auth.user);
  return (
    user ? (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Router />
        </div>
      </div>
    ) : 
    
    <Credintial />
  )
}

export default Layout