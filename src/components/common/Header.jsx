
import './Header.css'
import Logo from './Logo.jsx'
import { Bell, Home, MessageCircle } from 'react-feather'
import {Link} from 'react-router-dom'

function Footer({isloggedorauth, active}) {
  const tabstyle = {
    display:'flex',
    border:'none',
    backgroundColor:'transparent',
    outline:'none',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    color: 'rgba(10,10,10,0.8)',
    textDecoration:'none',
    fontSize:'14.5px',
    fontFamily: 'nunito'
  }
  return (
   <div className='header-container header-footer'>
    {isloggedorauth === 'logged' ? (
      <>
      <Link to='/' style={{...tabstyle, color:active === 'home' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' }}>
        <Home strokeWidth={1} />
        <span>Home</span>
      </Link>
      <Link to='/messages'  style={{...tabstyle, color:active === 'chat' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' }} >
        <MessageCircle strokeWidth={1} />
        <span>Chat</span>
      </Link>
      <Link to='/notification' style={{...tabstyle, color:active === 'notification' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' }}>
        <Bell strokeWidth={1} />
        <span>Notification</span>
      </Link>
      <Link to='/profile' style={{...tabstyle, color:active === 'profile' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' }} >
        <button style={{backgroundColor:'dodgerblue',border:'none',outline:'none',width:'25px',color:'white', height:'25px',borderRadius:'50%'}}>B</button>
        <span>Profile</span>
      </Link>
      </>
    ) : (
      <>
     <button className='header-footer-btn'><Link to='/seller' style={{textDecoration:'none'}} id='link'>Sell</Link></button>
     <button className='header-footer-btn htbtn-fill'><Link to='/auth/register' style={{textDecoration:'none'}} id='link'>Login/Sign up</Link></button>
     </>
    )
  }
   </div>
  )
}

export default function Header({hidefooter, isloggedorauth, active}) {
  return (
    <>
    <div className='header-container'>
      <Logo />
      {isloggedorauth  === true ? null : isloggedorauth === 'logged' ?
      (
        <div className='header-for-larges'>
        <button className='header-btn htbn-p' style={{border:'none',fontWeight:600}}>
          <Link to='/' style={{fontSize:'15px', color:active === 'home' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' , textDecoration:'none'}} id='link'>Home</Link></button>
         <button className='header-btn htbtn' style={{border:'none', fontWeight:600}}>
          <Link to='/messages' style={{fontSize:'15px', color:active === 'chat' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' , textDecoration:'none'}}>Chat</Link></button>
        <button className='header-btn htbn-p' style={{border:'none', fontSize:'15px', color:active === 'notification' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' , fontWeight:600}}>
          <Link to='/notification' style={{fontSize:'15px', color:active === 'notification' ? '#2AFFE2' : 'rgba(10,10,10,0.8)' , textDecoration:'none'}}>Notification</Link></button>
        <button className='header-btn htbtn' style={{border:'none',  fontWeight:600}}>
          <Link to='/profile' style={{fontSize:'15px', color:active === 'profile' ? '#2AFFE2' : 'rgba(10,10,10,0.8)', textDecoration:'none' }}>Profile</Link></button>
       </div>
      ) :(
        <div className='header-for-larges'>
        <button className='header-btn htbn-p'><Link to='/seller' style={{textDecoration:'none'}} id='link'>Sell</Link></button>
        <button className='header-btn htbtn-fill'><Link to='/auth/register' style={{textDecoration:'none'}} id='link'>Login/Sign up</Link></button>
       </div>
      )}
    </div>
    {hidefooter ? null : <Footer isloggedorauth={isloggedorauth} active={active} />}
    </>
  )
}