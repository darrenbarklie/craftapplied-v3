import React from 'react'

import { Title, Introduction, Subtitle, TextBlock, Image } from  './globals'


export const Antelle = () => (
  <section className="project project-antelle">
    
    <Title
      text="Antelle Website" />
    
    <Introduction
      text="We lent our services to Antelle, a software development company that produces software solutions for government and business organisations positioned on the Isle of Man. As a certified Microsoft Gold Partner, we offered to help Antelle bring their homepage and branding up to the gold standard." />
    
    <Subtitle
      text="Brief Analysis" />
    
    <Image
      imgSrc="https://static.pexels.com/photos/20787/pexels-photo.jpg"
      ratio="768/448"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="This is a picture of a cat!"
    />
    
    <TextBlock
      text="Our work began with a full audit of the exisitng Antelle website.  We identified that existing copy was well written and clearly mapped out the company's services and key information in detail.  The areas most in need of improvement included site structure, organisation of information hierarchy, and the aesthetic presentation of content." />
    
    <Subtitle
      text="UI/UX Design Phase" />
      
    <TextBlock
      text="Considering we had a strong foundation of content to work with, we focused the majority of our our efforts on a reiterative design process. Initial phases were concerned with replicating all content in Sketch, so that we had boilerplate templates to prototype with." />
    
    <TextBlock
      text="We reorganised and edited key information to ensure a coherent site struction and narrative.  Major user interface devices such as the mega-menu navigation, and tabbed modal popups were adopted to ensure effective context and hierarchy for users reviewing services and products offered." />
      
    <Image
      imgSrc="http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg"
      ratio="768/320"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="Goddamn! It's another cute kitty picture!"
    />

    <Subtitle
      text="Creative Process" />
      
    <TextBlock
      text="Now familiar with the content and confident in our direction, we began strengthening the company branding.  While a strong logomark existed, our challenge was to expand this element into a full branding treatment.  We created a master styleguide that defined typrography usage, expanded logo usage, colour schema and a full library of custom icons and graphics." />
      
    <TextBlock
      text="We were now able to work on the final aesthetic of the site, presenting our user interface elements and page templates in the latest Antelle branding." />
      
    <Image
      imgSrc="http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg"
      ratio="768/320"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="Goddamn! It's another cute kitty picture!"
    />

    <Subtitle
      text="Development Process" />
      
    <TextBlock
      text="With client approval confirmed for our Creative Phase, development of the front-end began.  Given the varience of designs between templates and the requirement for nested UI elements, we employed the use of the newly released Bootstrap 4 framework." />
      
    <TextBlock
      text="Developers took great care to ensure the designs were faithfully reproduced in the browser.  Established best practices and technologies like Sass, flexbox, and media queries ensure that the site will accurately render, function and scale on any modern browser or device." />
      
    <Subtitle
      text="The Result" />
      
    <TextBlock
      text="Our finalized v1.0 code was hosted on GitHub, allowing Antelle's own team of developers to integrate into their chosen content management system: Umbraco. Continued support and testing was offered to ensure the final product was as impressive as possible." />
      
    <Subtitle
      text="Client Testimonial Needs to Go Here!" />
    
  </section>
)
