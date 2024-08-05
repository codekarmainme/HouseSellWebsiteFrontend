import React from 'react'
import '../styles/Chat.css'
import Sidebar from '../components/Sidebar'
import Chatfeed from '../components/Chatfeed'
function Chat() {
  return (
    <div className='chat'>
     <Sidebar/>
     <Chatfeed/>
    </div>
  )
}

export default Chat