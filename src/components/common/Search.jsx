
import React from 'react'
import './Search.css'
import { Search, X } from 'react-feather'

export default function Searchmain ({close}) {
  return (
    <div className='search-tint-body'>
     <button className='exit' onClick={close}><X strokeWidth={1.3}/></button>

     <div className='search'>
      <input type='text' placeholder={'search stuffs in BTUM'} />
      <button><Search /></button>
     </div>
     <div className='search search-res'>
       <h3>Results</h3>
     </div>
    </div>
  )
}
