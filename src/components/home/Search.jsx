
import React from 'react'
import './Search.css'
import { Search } from 'react-feather'

export default function SearchH({open}) {
  return (
    <div className='home-h-search' onClick={open}>
      <input type='text' placeholder={'search stuffs in BTUM'} onClick={open}/>
      <button><Search /></button>
    </div>
  )
}
