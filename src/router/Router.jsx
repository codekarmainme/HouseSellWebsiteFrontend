import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post'
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import BecomeSeller from '../pages/BecomeSeller';
function Router() {
  return (
    <>
       
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<BecomeSeller/>} path='/post'/>
                <Route element={<Profile/>} path='/profile'/>
                <Route element={<Chat/>} path='/chat'/>

            </Routes>
      
    </>
  )
}

export default Router