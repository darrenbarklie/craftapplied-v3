import React from 'react'

import { IconFacebook, IconTwitter, IconLinkedIn, IconInstagram, IconCodePen } from '../../assets/svg'


export const ContactInfo = (props) => {
  return (
    <div className="contact-info">
      
      <h3>Get In Touch</h3>
      
      {/* TODO : Make this SVG to minimize data-scraping */}
      
      <p>+44 (0)208 123 0264</p>
      <p>hello@craftapplied.com</p>

      <div className="social">

        <a href="#"><img src={IconFacebook} alt="Facebook icon"/></a>

        <a href="#"><img src={IconTwitter} alt="Twitter icon"/></a>

        <a href="#"><img src={IconLinkedIn} alt="LinkedIn icon"/></a>

        <a href="#"><img src={IconInstagram} alt="Instagram icon"/></a>

        <a href="#"><img src={IconCodePen} alt="CodePen icon"/></a>

      </div>
    </div>
  )
}
