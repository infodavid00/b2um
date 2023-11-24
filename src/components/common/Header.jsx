
import './Header.css'
import Logo from './Logo.jsx'
import { Bell, Home, MessageCircle } from 'react-feather'

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
    fontWeight:500
  }
  return (
   <div className='header-container header-footer'>
    {isloggedorauth === 'logged' ? (
      <>
      <button onClick={()=> window.location.href = '/'} style={{...tabstyle, color:active === 'home' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' }}>
        <Home strokeWidth={1.2} />
        <span>Home</span>
      </button>
      <button onClick={()=> window.location.href = '/messages'}  style={{...tabstyle, color:active === 'chat' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' }} >
        <MessageCircle strokeWidth={1.2} />
        <span>Chat</span>
      </button>
      <button onClick={()=> window.location.href = '/notification'} style={{...tabstyle, color:active === 'notification' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' }}>
        <Bell strokeWidth={1.2} />
        <span>Notification</span>
      </button>
      <button onClick={()=> window.location.href = '/profile'} style={{...tabstyle, color:active === 'profile' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' }} >
        <button style={{backgroundColor:'rgba(150,150,250,1)',border:'none',outline:'none',width:'25px',color:'white', height:'25px',borderRadius:'50%'}}>B</button>
        <span>Profile</span>
      </button>
      </>
    ) : (
      <>
     <button className='header-footer-btn' onClick={()=> window.location.href = '/seller'}>Sell</button>
     <button className='header-footer-btn htbtn-fill' onClick={()=> window.location.href = '/auth/register'}>Login/Sign up</button>
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
        <button className='header-btn htbn-p' style={{border:'none', fontSize:'15px', color:active === 'home' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' , fontWeight:600}} onClick={()=> window.location.href = '/'}>
          Home</button>
        <button className='header-btn htbtn' style={{border:'none', fontSize:'15px', color:active === 'chat' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' , fontWeight:600}} onClick={()=> window.location.href = '/messages'}>
          Chat</button>
        <button className='header-btn htbn-p' style={{border:'none', fontSize:'15px', color:active === 'notification' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' , fontWeight:600}} onClick={()=> window.location.href = '/notification'}>
          Notification</button>
        <button className='header-btn htbtn' style={{border:'none', fontSize:'15px', color:active === 'profile' ? 'rgba(150,150,250,1)' : 'rgba(10,10,10,0.8)' , fontWeight:600}} onClick={()=> window.location.href = '/profile'}>
          Profile</button>
       </div>
      ) :(
        <div className='header-for-larges'>
        <button className='header-btn htbn-p' onClick={()=> window.location.href = '/seller'}>Sell</button>
        <button className='header-btn htbtn-fill' onClick={()=> window.location.href = '/auth/register'}>Login/Sign up</button>
       </div>
      )}
    </div>
    {hidefooter ? null : <Footer isloggedorauth={isloggedorauth} active={active} />}
    </>
  )
}