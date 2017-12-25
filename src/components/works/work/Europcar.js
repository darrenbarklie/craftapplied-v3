import React from 'react'

import { Title, Introduction, Subtitle, TextBlock, Image } from  './globals'


export const Europcar = () => (
  <section className="project project-europcar">
    
    <Title
      text="Europcar" />
    
    <Introduction
      text="We were invited to complete a full design phase for an exclusive tablet app for Europcar. Our client wanted to provide an opportunity for customers idling in airport baggage halls to browse, check-in, and reserve Europcar hire vehicles." />
    
    <Subtitle
      text="Brief Studying" />
    
    <Image
      imgSrc="https://static.pexels.com/photos/20787/pexels-photo.jpg"
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
    
  </section>
)
