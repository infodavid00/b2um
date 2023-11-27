
import React from 'react'
import { ChevronLeft } from 'react-feather'
import { Link } from 'react-router-dom'

export default function Header({data}) {
  return (
    <div className='messages-view2-header'>
     <Link to={'/messages'}><ChevronLeft strokeWidth={1.4}/></Link>
     <span style={{fontWeight:700, fontSize:'18px',color:'rbga(0,0,0,0.7)'}}>{data.id}</span>
     <span style={{fontFamily:'nunito'}}>{data.lastseen}</span>
   </div>
  )
}
