
import React from 'react'
import Header from '../../components/common/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import './auth.css'
import Se from './se.jsx'

export default function Login() {
  return (
    <div className='authbody'>
     <Header hidefooter={true} isloggedorauth={true} />
     <div className='authcont'>
       <h2>Welcome back!</h2>
       <input type='email' className='auth-input' placeholder='Email or Mobile number'/>
       <input type='password' className='auth-input' placeholder='Password' />
       <p style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100%',padding:0}}>
       <span onClick={()=> window.location.href = '/auth/fp'} style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Forgotten password?</span></p>
       <button className='auth-trigger'>Login</button>
       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Or</span></p> 

       <Se />

       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span onClick={()=> window.location.href = '/auth/register'} style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>New to B2UM? Sign up</span></p> 

     </div>
     <Footer />
    </div>
  )
}
