import React from 'react';
import Navbar from './Navbar';
import Router from '../router/Router';
import Credintial from '../pages/Credintial';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import '../styles/ToastCustomStyles.css'
function Layout() {
  const user = useSelector(state => state.auth.user);
  const authStatus = useSelector(state => state.auth.status);

  const isAuthenticated = user && Object.keys(user).length > 0 && user.id;


  return (
    isAuthenticated ? (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Router />
        </div>
             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />


      </div>
    ) : (
      <Credintial />
    )
  );
}

export default Layout;