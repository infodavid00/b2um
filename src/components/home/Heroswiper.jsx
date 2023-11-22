
import React from 'react'
import {Video, User, Package, CreditCard , Plus, Disc,Pocket,
Command,Users} from 'react-feather'
import './Heroswiper.css'

export default function Heroswiper() {
  return (
    <div className='heroswippercontainer'>
     <div>
       <button style={{backgroundColor:'rgba(0,180,0,0.8'}}><Plus /></button>
       <span>Game topup</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(120,10,200,0.8'}}><CreditCard /></button>
       <span>Gift cards</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(120,10,20,0.8'}}><Video /></button>
       <span>Video games</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(22,120,20,0.8'}}><Command /></button>
       <span>Software</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(250,10,30,0.8'}}><Pocket /></button>
       <span>Game coins</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(200,130,200,0.8'}}><Package /></button>
       <span>Items</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(220,200,20,0.8'}}><User /></button>
       <span>Accounts</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(120,120,120,0.8'}}><Users /></button>
       <span>Game pal</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(20,100,250,0.8'}}><Disc /></button>
       <span>Coaching</span>
     </div>
    </div>
  )
}

