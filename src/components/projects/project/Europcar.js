import React from 'react'

import { Title, Introduction, Subtitle, TextBlock, Image } from  './globals'


export const Europcar = () => (
  <section className="project project-europcar">
    
    <Title
      text="Europcar" />
    
    <Introduction
      text="We were invited to complete a full design phase for an exclusive tablet app for Europcar. Our client wanted to provide an opportunity for customers idling in airport baggage halls to browse, check-in, and reserve Europcar hire vehicles." />
    
    <Subtitle
      text="Brief Analysis" />
    
    <Image
      imgSrc="https://static.pexels.com/photos/20787/pexels-photo.jpg"
      ratio="768/448"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="This is a picture of a cat!"
    />
    
    <TextBlock
      text="The application was to be housed in a kiosk featuring an Android tablet, camera and document scanner hardware. Due to the unique setting of a user’s engagement with an unfamiliar system, we refined the UX many times to streamline and signpost required user interaction with both hardware and software." />
    
    <Subtitle
      text="Discovery Phase" />
      
    <TextBlock
      text="After extensive review of the functional specification documentation, our first steps were to identify the application workflow. By investing time to fully understand this process, we aimed to avoid any potential future roadblocks or bottlenecks." />
    
    <TextBlock
      text="This documentation affords the client a top-level view of the scope of work, and allowed for an early lead in the development consultation." />
      
    <Image
      imgSrc="http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg"
      ratio="768/320"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="Goddamn! It's another cute kitty picture!"
    />
    
    <Image
      imgSrc="http://www.funnyrush.com/funny-pictures/3946/my-cat-sticking-out-his-tongue.jpg"
      ratio="768/320"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="Checking how images stack together and also how captions will wrap, featuring yet another cool kitty pic, of course."
    />
    
    <Subtitle
      text="Wireframing Process" />
      
    <TextBlock
      text="Having identified the expectations of the system at each stage, we began to visualize how our solution might look, with placement of user input elements and early storyboarding of user experience." />
      
    <TextBlock
      text="This process results in a ‘first-look’ at the software for both clients and developers; a process that is repeated and refined a number of times." />
    
  </section>
)
