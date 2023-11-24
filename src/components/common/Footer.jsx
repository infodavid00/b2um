
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
     <section className="app-afterHeader app-footer-container">
       <ol>
          <li>Authentication</li>
          <li><a href="/auth/login">Login</a></li>
          <li><a href="/auth/register">Create an account</a></li>
          <li><a href="/auth/fp">Forgotten password</a></li>
        </ol>
       <ol>
          <li>Funtionalities</li>
          <li><a href="/seller">Start selling</a></li>
          <li><a href="/category/Trending items">See Items</a></li>
          <li><a href="/">Search Items in B2UM</a></li>
        </ol>
       <ol>
          <li>Contact</li>
          <li><a href="mailto:yourmail@gmail.com">youremail@email.com</a></li>
          <li><a href="https://facebook.com/b2um">B2UM Facebook</a></li>
          <li><a href="#">+1234567890</a></li>
       </ol>
       <ol>
          <li>Refrences</li>
          <li><a href="/">Landing page</a></li>
          <li><a href="/auth/register">Signin/Signup</a></li>
          <li><a href="/notification">Listings</a></li>
       </ol>
     </section>
  )
}
