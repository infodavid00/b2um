
import React from 'react'
import './Search.css'
import { Search } from 'react-feather'

export default function SearchH() {
  return (
    <div className='home-h-search' onClick={open}>
      <input type='text' placeholder={'search stuffs in BTUM'}/>
      <button><Search /></button>
    </div>
  )
}
