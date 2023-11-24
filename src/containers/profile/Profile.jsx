
import React from 'react'
import Header from "../../components/common/Header";
import './profile.css'

export default function Profile() {
  return (
    <div>
       <Header isloggedorauth={'logged'} active={'profile'} />
       <div style={{marginTop: '6em'}}>
         <div className='profile-profilepic'>B</div>
       </div>

       <div> 
         <h1 style={{textAlign:'center',color:'rbga(0,0,0,0.7)'}}>Buffalo Mania</h1>
         <p style={{textAlign:'center',color:'rbga(0,0,0,0.8)',marginTop:'-1em'}}>User at Level 1</p>
         <button className='profile-sellbtn' onClick={()=> window.location.href = '/seller'}>Start Selling</button>
       </div>

       <div className='profile-content-body'>
          <div className='profile-meta-body'>
             <div className='profile-meta-cont'>
              <span>Available Balance</span>
              <span style={{fontWeight:700}}>0.00 USD</span>
             </div>
             <div className='profile-meta-cont'>
              <span>Points Earned</span>
              <span style={{fontWeight:700}}>202 POINTS</span>
             </div>
          </div>
           
          <div>
             <button className='logout-btn' onClick={()=> window.location.href = '/'}>Logout</button>
          </div>
       </div>
    </div>
  )
}
