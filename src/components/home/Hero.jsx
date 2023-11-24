
import React from 'react'
import '../../assets/styles/home.css'
import SearchH from './Search.jsx'

export default function Hero({opensearch}) {
  return (
    <div className='home-hero'>
      <SearchH open={opensearch} />
      <div className='home-main-hero-section'>
        <div>
         <h2 className='home-main-hero-h'>Start selling gift cards now!</h2>
         <p className='home-main-hero-p'>Trading made easy with BTUM, your Number 1 choice.</p>
         <div className='home-main-hero-cta-section'>
          <button onClick={()=> window.location.href = '/seller'}>Start Selling</button>
          <button id='h-m-h-c-s-b2' onClick={()=> window.location.href = '/auth/register'}>Find great deals</button>
         </div>
        </div>
        <img src='https://www.g2g.com/img/giftcards-img.d9c7f715.webp' className='home-hero-poster' />
      </div>
    </div>

  )
}
// 