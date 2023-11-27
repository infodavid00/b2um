
import React from 'react'
import './Search.css'
import { Search } from 'react-feather'

export default function SearchH({open, placeholder}) {
  return (
    <div className='home-h-search' onClick={open}>
      <input type='text' placeholder={placeholder ?? 'search stuffs in BTUM'} onClick={open}/>
      <button style={{backgroundColor:'#2AFFE2'}}><Search /></button>
    </div>
  )
}
