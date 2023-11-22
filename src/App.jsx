
import { Route, Routes } from 'react-router-dom'
import Home from './containers/home/Home.jsx'
import Seller from './containers/seller/Seller.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/seller' element={<Seller/>} />
      </Routes>
    </>
  )
}

export default App