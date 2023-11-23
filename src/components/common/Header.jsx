
import './Header.css'
import Logo from './Logo.jsx'
import { Bell, Home, MessageCircle } from 'react-feather'

function Footer({isloggedorauth}) {
  const tabstyle = {
    display:'flex',
    border:'none',
    backgroundColor:'transparent',
    outline:'none',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    color:'rgba(10,10,10,0.8)',
    fontWeight:500
  }
  return (
   <div className='header-container header-footer'>
    {isloggedorauth === 'logged' ? (
      <>
      <button style={tabstyle} >
        <Home strokeWidth={1.2} />
        <span>Home</span>
      </button>
      <button style={tabstyle} >
        <MessageCircle strokeWidth={1.2} />
        <span>Chat</span>
      </button>
      <button style={tabstyle} >
        <Bell strokeWidth={1.2} />
        <span>Notification</span>
      </button>
      <button style={tabstyle} >
        <button style={{backgroundColor:'tomato',border:'none',outline:'none',width:'25px',color:'white', height:'25px',borderRadius:'50%'}}>B</button>
        <span>Profile</span>
      </button>
      </>
    ) : (
      <>
     <button className='header-footer-btn'>Sell</button>
     <button className='header-footer-btn htbtn-fill'>Login/Sign up</button>
     </>
    )
  }
   </div>
  )
}

export default function Header({hidefooter, isloggedorauth}) {
  return (
    <>
    <div className='header-container'>
      <Logo />
      {isloggedorauth  === true ? null : isloggedorauth === 'logged' ?
      (
        <div className='header-for-larges'>
        <button className='header-btn htbn-p' style={{border:'none', fontSize:'15px', color:'rgba(20,20,20,0.5)', fontWeight:600}}>
          Home</button>
        <button className='header-btn htbtn' style={{border:'none', fontSize:'15px', color:'rgba(20,20,20,0.5)', fontWeight:600}}>
          Chat</button>
        <button className='header-btn htbn-p' style={{border:'none', fontSize:'15px', color:'rgba(20,20,20,0.5)', fontWeight:600}}>
          Notification</button>
        <button className='header-btn htbtn' style={{border:'none', fontSize:'15px', color:'rgba(20,20,20,0.5)', fontWeight:600}}>
          Profile</button>
       </div>
      ) :(
        <div className='header-for-larges'>
        <button className='header-btn htbn-p'>Sell</button>
        <button className='header-btn htbtn-fill'>Login/Sign up</button>
       </div>
      )}
    </div>
    {hidefooter ? null : <Footer isloggedorauth={isloggedorauth} />}
    </>
  )
}