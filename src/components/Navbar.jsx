import React, { useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import '../styles/Navbar.css';
import {FaBell}  from 'react-icons/fa';
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";

function Navbar() {
  const menuRef=useRef();
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
  const[activeBar,setActivebar]=useState('Home');
  return (
    <div className="navbar">
    
        <img src={logo} alt="housesell in ethiopia" />
      
     
        <div className="navbar-section" ref={menuRef}>
          <Link to='/'>
          <button onClick={()=>setActivebar('Home')} className={`h-btn ${activeBar==='Home' ? 'active-btn' : ''} `}>Home</button>
          </Link>
          <Link to='/post'>
          <button onClick={()=>setActivebar('Post')} className={`p-btn ${activeBar==='Post' ? 'active-btn' : ''} `}>Post</button>
          </Link>
        <Link to='/profile'>
        <button onClick={()=>setActivebar('Profile')} className={`pp-btn ${activeBar==='Profile' ? 'active-btn' : ''} `}>Profile</button>
        </Link>
          <Link to='/chat'>
          <button onClick={()=>setActivebar('Chat')} className={`c-btn ${activeBar==='Chat' ? 'active-btn' : ''} `}>Chats</button>
          </Link>
         
        </div>
     
      <div className="icons">
      <button>
      <FaBell className="bell-icon"/>
      </button>
        
        <span className='not-num'>6</span>
       <VscAccount className="pp-icon"/>
       <div className='mobile-menu' >
            <button onClick={toggleMenu}>

               <MdMenu className="menu-icon"/>
                </button>
          
            </div>
      </div>
      
    </div>
  );
}

export default Navbar;
