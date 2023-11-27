
import React from 'react'
import {Video, User, Package, CreditCard , Plus, Disc,Pocket,
Command,Users} from 'react-feather'
import './Heroswiper.css'
import { Link } from 'react-router-dom'

export default function Heroswiper() {
  return (
    <div className='heroswippercontainer'>
     <div>
       <button style={{backgroundColor:'rgba(0,180,0,0.8'}}><Link id='link' style={{color:'white'}} to='/category/game-topup'>
       <Plus /></Link></button>
       <span>Game topup</span>
     </div>
     <div >
       <button style={{backgroundColor:'rgba(120,10,200,0.8'}}><Link id='link' style={{color:'white'}} to='/category/gift-cards'>
       <CreditCard /></Link></button>
       <span>Gift cards</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(120,10,20,0.8'}}><Link id='link' style={{color:'white'}} to='/category/video-game'>
       <Video /></Link></button>
       <span>Video games</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(22,120,20,0.8'}}><Link id='link' style={{color:'white'}} to='/category/software'>
       <Command /></Link></button>
       <span>Software</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(250,10,30,0.8'}}><Link id='link' style={{color:'white'}} to='/category/game-coins'>
       <Pocket /></Link></button>
       <span>Game coins</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(200,130,200,0.8'}}><Link id='link' style={{color:'white'}} to='/category/items'>
       <Package /></Link></button>
       <span>Items</span>
     </div>
     <div>
       <button style={{backgroundColor:'rgba(220,200,20,0.8'}}><Link id='link' style={{color:'white'}} to='/category/accounts'>
       <User /></Link></button>
       <span>Accounts</span>
     </div>
     <div onClick={()=> window.location.href = '/auth/register'}>
       <button style={{backgroundColor:'rgba(120,120,120,0.8'}}><Link id='link' style={{color:'white'}}>
       <Users /></Link></button>
       <span>Game pal</span>
     </div>
     <div onClick={()=> window.location.href = '/auth/register'}>
       <button style={{backgroundColor:'rgba(20,100,250,0.8'}}><Link id='link' style={{color:'white'}}>
       <Disc /></Link></button>
       <span>Coaching</span>
     </div>
    </div>
  )
}

// 