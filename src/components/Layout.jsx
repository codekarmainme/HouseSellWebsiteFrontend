import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Authcontext } from '../context/Login_context'
import Router from '../router/Router'
import Credintial from '../pages/Credintial';

function Layout() {
  const { user } = useContext(Authcontext);
  return (
    user ? (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Router />
        </div>
      </div>
    ) : <Credintial />
  )
}

export default Layout