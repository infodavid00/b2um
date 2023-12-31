
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
     <section className="app-afterHeader app-footer-container">
       <ol>
          <li>Authentication</li>
          <li><Link id='link' to="/auth/login">Login</Link></li>
          <li><Link id='link' to="/auth/register">Create an account</Link></li>
          <li><Link id='link' to="/auth/fp">Forgotten password</Link></li>
        </ol>
       <ol>
          <li>Funtionalities</li>
          <li><Link id='link' to="/seller">Start selling</Link></li>
          <li><Link id='link' to="/category/Trending items">See Items</Link></li>
          <li><Link id='link' to="/">Search Items in B2UM</Link></li>
        </ol>
       <ol>
          <li>Contact</li>
          <li><Link id='link' to="mailto:yourmail@gmail.com">youremail@email.com</Link></li>
          <li><Link id='link' to="https://facebook.com/b2um">B2UM Facebook</Link></li>
          <li><Link id='link' to="#">+1234567890</Link></li>
       </ol>
       <ol>
          <li>Refrences</li>
          <li><Link id='link' to="/">Landing page</Link></li>
          <li><Link id='link' to="/auth/register">Signin/Signup</Link></li>
          <li><Link id='link' to="/notification">Listings</Link></li>
       </ol>
     </section>
  )
}
