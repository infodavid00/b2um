
import { Route, Routes } from 'react-router-dom'
import Home from './containers/home/Home.jsx'
import Seller from './containers/seller/Seller.jsx'
import Login from './containers/auth/login.jsx'
import Register from './containers/auth/register.jsx'
import Category from './containers/category/Category.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/seller' element={<Seller/>} />

        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/auth/register' element={<Register />} />

        <Route exact path='/category' element={<Category/>} />
      </Routes>
    </>
  )
}

export default App