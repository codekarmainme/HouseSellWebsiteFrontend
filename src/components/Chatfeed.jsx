import React from 'react';
import '../styles/Chatfeed.css';
import "../styles/Sidebar.css";
function Chatfeed() {
  const messages = [1, 2, 3, 4, 5, 6];

  return (
    <div className='Chat-feed'>
      {messages.map((message) => {
        const isEven = message % 2 === 0;

        // Define styles for even and odd numbers
        const evenStyle = {
          backgroundColor: '#154360',
          borderBottomLeftRadius:-80,
          borderTopLeftRadius:'10px',
          borderTopRightRadius:'10px',
          borderBottomRightRadius:'10px',
          marginLeft:"47%",
          padding:'10px'
          
        };

        const oddStyle = {
          backgroundColor: 'rgb(255, 230, 0)',
          borderBottomLeftRadius:-40,
          borderTopLeftRadius:'10px',
          borderTopRightRadius:'10px',
          borderBottomRightRadius:'10px',
          marginLeft:"7%",
          padding:'10px'
        };

        const msgStyle = isEven ? evenStyle : oddStyle;

        return (
          <div key={message} className='msg' style={msgStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate consequatur temporibus nisi delectus inventore, voluptatum tempore ipsum quam. Aspernatur, recusandae autem sit ipsam quos facilis quod? Aliquam, officiis assumenda.
          </div>
        );
      })}
    </div>
  );
}

export default Chatfeed;
