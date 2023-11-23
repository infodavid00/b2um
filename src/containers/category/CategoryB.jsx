
import React from 'react'
import Header from '../../components/category/Header'
import Footer from '../../components/common/Footer'
import './Category.css'
import { Minus, Plus } from 'react-feather'

export default function CategoryB() {
  return (
    <div>
      <Header title={'Razer Gold Gift Card'} />
        <div style={{marginTop: '6em'}} className='category-body'>
         <div>
         </div>

         <img src='' className='category-b-img' />
         <h3 style={{textAlign:'center'}}>Razer Gold USD 60 (Global)</h3>
         <div className='category-b-qnty'>
           <button><Minus /></button>
           <h4>3</h4>
           <button><Plus /></button>
         </div>
         <div className='category-b-p-cont'>
           <button style={{backgroundColor:'rgb(150,150,250)', fontFamily:700,color:'white'}}>Purchase now</button>
           <button>Contact seller</button>
         </div>

         <div className='category-infoholder-body-forlargescreens'>
         <div className='category-infoholder-body'>
           <h3>Product Information</h3>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Total Price</span>
             <span className='cihic-t cihic-t2'>$50 usd</span>
           </div>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Delivery time</span>
             <span className='cihic-t cihic-t2'>1-3mins</span>
           </div>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Card type</span>
             <span className='cihic-t cihic-t2'>E-code</span>
           </div>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Can Activate in</span>
             <span className='cihic-t cihic-t2'>Worldwide</span>
           </div>
         </div>


        <div className='category-infoholder-body'>
           <h3>Seller Information</h3>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Seller</span>
             <span className='cihic-t cihic-t2'>Offgamers</span>
           </div>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Seller Level</span>
             <span className='cihic-t cihic-t2'>Level 140</span>
           </div>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Seller About</span>
             <span className='cihic-t cihic-t2'>392 Solds</span>
           </div>
           <div className='category-infoholder-info-cont'>
             <span className='cihic-t'>Rating</span>
             <span className='cihic-t cihic-t2'>99%</span>
           </div>
         </div>
         </div>
         

         {/* < */}
        </div>
      <Footer />
    </div>
  )
}
