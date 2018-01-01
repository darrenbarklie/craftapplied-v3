import React from 'react'

import { Title, Introduction, Subtitle, TextBlock, Image } from  './globals'


export const JamesLeBosquet = () => (
  <section className="project project-antelle">
    
    <Title
      text="James LeBosquet Web App" />
    
    <Introduction
      text="We collaborated with New York City-based hair stylist James LeBosquet to build a modern web platform to host his personal brand, market his services, and collect user-submitted inquires and booking requests." />
    
    <Subtitle
      text="Discovery Phase" />
      
    <TextBlock
      text="James produced a volume of marketing materials that we helped to edit and format for an engaging web experience.  In addition to presenting information, it was important to incentivise his audience toward the two primary call-to=actions: to schedule an personal appointment or book an education class." />
    
    <Subtitle
      text="Design Phase" />
      
    <TextBlock
      text="Our aesthetic treatment was developed to compliment James' service and target audience, with a tastful and carefully refined sense of style and confidence." />
      
    <TextBlock
      text="We decided upon bold and direct call-to-actions which contrasted with the clean aesthetic that we were exploring. This afforded a strong and focused user experience that doesn't distract from key interactions and encourages conversaions." />
      
    <Subtitle
      text="Development Phase" />
    
    <TextBlock
      text="As the solution had minimal technical demands, we decided to adopt React to deliver a polished and highly-responsive web app interface.  We produced a custom REST API configured with MongoDB for effecient data collection across the web experience." />

  </section>
)
