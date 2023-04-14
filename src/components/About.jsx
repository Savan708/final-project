import React from 'react'
import Navigation from './Navigation'

export default function About() {
  return (
   <div id='about'>
       <Navigation />
       <h2 className="title">About</h2>
       <section class="wrapper">
        <div className="display-about">
          <h3>About Gedget Store</h3>
      <p>The best technological products may be found at Gadget Store, a top online merchant. Our area of expertise is offering our clients cutting-edge products at affordable pricing.</p>
      <h3>Gedget Store Vision</h3>
      <p>Gadget Store think that technology has the potential to change the way people work, play, and live. Our goal is to offer our consumers the latest and most advanced technological products while also giving them the best purchasing experience.</p>
      <h3>Gedget Store Services</h3>
      <p>We pledge to offer the best possible customer service and assistance to all of our clients. Our staff is here to assist you in identifying the items that best suit your needs and to answer any questions you may have. You may shop with confidence because we also provide free shipping on all orders and a 30-day money-back guarantee.</p>
      </div>
    </section>
   </div>
  )
}
