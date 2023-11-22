
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
     <section className="app-afterHeader app-footer-container">
       <ol>
          <li>Authentication</li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Create an account</a></li>
          <li><a href="#">Forgotten password</a></li>
        </ol>
       <ol>
          <li>Funtionalities</li>
          <li><a href="#">Start selling</a></li>
          <li><a href="#">See Items</a></li>
          <li><a href="#">Search Items in B2UM</a></li>
        </ol>
       <ol>
          <li>Contact</li>
          <li><a href="#">youremail@email.com</a></li>
          <li><a href="#">B2UM Facebook</a></li>
          <li><a href="#">+1234567890</a></li>
       </ol>
       <ol>
          <li>Refrences</li>
          <li><a href="#">Landing page</a></li>
          <li><a href="#">Signin/Signup</a></li>
          <li><a href="#">Listings</a></li>
       </ol>
     </section>
  )
}
