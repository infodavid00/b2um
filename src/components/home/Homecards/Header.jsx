

import React from 'react'
import { ChevronRight } from 'react-feather'
import '../../../assets/styles/home.css'

export default function Header({title, col}) {
  return (
    <div className='home-main-card-header' style={{color:col}}>
     <span id='hideonsmallscreens'>hello world</span>
     <h1>{title}</h1>
     <button onClick={()=> window.location.href = 'category/'+title} className='home-main-card-header-btn' style={{color:col}}>
     <span>Discover all </span>
     <ChevronRight strokeWidth={1.5}/></button>
    </div>
  )
}
// 