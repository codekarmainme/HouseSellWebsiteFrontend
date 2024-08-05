import React, { useRef } from "react";
import "../styles/Sidebar.css";
import pflpic from "../assets/images/pfl-pic.jpg";

const Sidebar = () => {
   const sidebarref=useRef(null);
   function hidesidebar(){
    sidebarref.current.classList.add('hide-side-bar')
   }
  return (
    <div className="side-bar" ref={sidebarref} onClick={hidesidebar}>
      <div className="nm">
      <img src={pflpic} className="pfl-pi" alt="Mr. abebe belew" />
      <div className="nm-msg">
      <span style={{fontWeight:'normal'}}>
         Matial. AB
      </span>
       <span style={{fontWeight:'normal', fontSize:10}}>Lorem ipsum do repudiandae....</span>
      </div>
      
      </div>
      <div className="nm" style={{backgroundColor:'#154360'}}>
      <img src={pflpic} className="pfl-pi" alt="Mr. abebe belew" />
      <div className="nm-msg">
      <span style={{fontWeight:'normal'}}>
         Matial. AB
      </span>
       <span style={{fontWeight:'normal', fontSize:10}}>Lorem ipsum do repudiandae....</span>
      </div>
      
      </div>
      <div className="nm">
      <img src={pflpic} className="pfl-pi" alt="Mr. abebe belew" />
      <div className="nm-msg">
      <span style={{fontWeight:'normal'}}>
         Matial. AB
      </span>
       <span style={{fontWeight:'normal', fontSize:10}}>Lorem ipsum do repudiandae....</span>
      </div>
      
      </div>
      <div className="nm">
      <img src={pflpic} className="pfl-pi" alt="Mr. abebe belew" />
      <div className="nm-msg">
      <span style={{fontWeight:'normal'}}>
         Matial. AB
      </span>
       <span style={{fontWeight:'normal', fontSize:10}}>Lorem ipsum do repudiandae....</span>
      </div>
      
      </div>
      <div className="nm">
      <img src={pflpic} className="pfl-pi" alt="Mr. abebe belew" />
      <div className="nm-msg">
      <span style={{fontWeight:'normal'}}>
         Matial. AB
      </span>
       <span style={{fontWeight:'normal', fontSize:10}}>Lorem ipsum do repudiandae....</span>
      </div>
      
      </div>
      <div className="nm">
      <img src={pflpic} className="pfl-pi" alt="Mr. abebe belew" />
      <div className="nm-msg">
      <span style={{fontWeight:'normal'}}>
         Matial. AB
      </span>
       <span style={{fontWeight:'normal', fontSize:10}}>Lorem ipsum do repudiandae....</span>
      </div>
      
      </div>
    </div>
  );
};

export default Sidebar;
