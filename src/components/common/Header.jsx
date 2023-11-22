
import './Header.css'
import Logo from './Logo.jsx'

function Footer() {
  return (
   <div className='header-container header-footer'>
     <button className='header-footer-btn'>Sell</button>
     <button className='header-footer-btn htbtn-fill'>Login/Sign up</button>
   </div>
  )
}

export default function Header({hidefooter}) {
  return (
    <>
    <div className='header-container'>
      <Logo />
      <div className='header-for-larges'>
        <button className='header-btn htbn-p'>Sell</button>
        <button className='header-btn htbtn-fill'>Login/Sign up</button>
      </div>
    </div>
    {hidefooter ? null : <Footer />}
    </>
  )
}