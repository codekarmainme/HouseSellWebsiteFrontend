
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

import MyPosts from '../pages/MyPosts';
import Chat from '../pages/Chat';
import BecomeSeller from '../pages/BecomeSeller';
import RealEstate from '../pages/RealEstate';
import Announcement from '../pages/Announcement';
function Router() {
  return (
    <>

      <Routes>
        <Route element={<Home />} path='/' />

        <Route element={<BecomeSeller />} path='/post' />
        <Route element={<MyPosts />} path='/myposts' />
        <Route element={<Chat />} path='/chat' />
        <Route element={<RealEstate />} path='/realestate' />
        <Route element={<Announcement />} path='/announcement' />

      </Routes>

    </>
  )
}

export default Router