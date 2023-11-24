
import { Route, Routes } from 'react-router-dom'
import Home from './containers/home/Home.jsx'
import Seller from './containers/seller/Seller.jsx'
import Login from './containers/auth/login.jsx'
import Register from './containers/auth/register.jsx'
import Category from './containers/category/Category.jsx'
import CategoryB from './containers/category/CategoryB.jsx'
import Notification from './containers/notification/Notification.jsx'
import Messages from './containers/messages/Messages.jsx'
import MessagesMain from './containers/messages/MessagesMain.jsx'
import Profile from './containers/profile/Profile.jsx'
import Fp from './containers/auth/fp.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/seller' element={<Seller/>} />

        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/auth/register' element={<Register />} />
        <Route exact path='/auth/fp' element={<Fp />} />

        <Route exact path='/category/:category' element={<Category/>} />
        <Route exact path='/category/:cateogry/:id' element={<CategoryB/>} />
        
        <Route exact path='/notification' element={<Notification />} />
        <Route exact path='/messages/' element={<Messages />} />
        <Route exact path='/messages/:id' element={<MessagesMain />} />

        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
