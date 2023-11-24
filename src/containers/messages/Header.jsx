
import React from 'react'
import { ChevronLeft } from 'react-feather'

export default function Header({data}) {
  return (
    <div className='messages-view2-header'>
     <ChevronLeft strokeWidth={1.4}  onClick={()=> window.location.href = '/messages'}/> 
     <span style={{fontWeight:700, fontSize:'18px',color:'rbga(0,0,0,0.7)'}}>{data.id}</span>
     <span>{data.lastseen}</span>
   </div>
  )
}
