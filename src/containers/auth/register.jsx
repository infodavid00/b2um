
import React, {useState} from 'react'
import Header from '../../components/common/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import './auth.css'
import Se from './se.jsx'


function Flow1({continuesignup}) {
  return (
       <div className='authcont'>
       <h2>Create an account</h2>
       <input type='email' className='auth-input' placeholder='Email address'/>
       <input type='password' className='auth-input' placeholder='Password' />
       <input type='password' className='auth-input' placeholder='Confirm password' />
       <input type='text' className='auth-input' placeholder='Username'/>
       <p style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Username cannot be changed after it has been created.</span></p>
      
       <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:'0.5em', width:'100%', marginBottom:'1.5em'}}>
         <input type='text' className='auth-input' placeholder='First name' />
         <input type='text' className='auth-input' placeholder='Last name'/> 
       </div> 
       <button onClick={continuesignup} className='auth-trigger'>Create an account</button>
 
       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Or</span></p> 
       <Se />
       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span onClick={()=> window.location.href = '/auth/login'} style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Already have an account? Login</span></p> 

     </div>
  )
}


function Flow2() {
  const [time, settime] = useState(60)
  const startcout = setInterval(() => {
   let i = time -1
   settime(i)
  } , 1000)
  if (settime === 0) {
    clearInterval(startcout)
  }
//    console.log(time)

  return (
       <div className='authcont'>
       <h2>Email One-time Password (OTP)</h2>
       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0, marginTop:'-3%'}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Enter the OTP sent to you at da*****@gmail.com</span></p> 
       <input type='text' className='auth-input' placeholder='Enter otp'/>

       <p style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',width:'100%',padding:0}}>
       <span style={{cursor:'pointer', fontWeight:600, color:'rgba(10,10,10,0.7)'}}>Requesting in {1}sec...</span></p>

       <button className='auth-trigger'>Verify account</button>
     </div>
  )
}



export default function Register() {
  const [flow, setFlow] =  useState(1)
  return (
    <div className='authbody'>
     <Header hidefooter={true} isloggedorauth={true} />
     {flow === 1  ? <Flow1 continuesignup={()=> setFlow(2)} /> : flow === 2  ? <Flow2 /> : null}
     <Footer />
    </div>
  )
}
