import React from 'react'

import { Title, Introduction, Subtitle, TextBlock, Image } from  './globals'


export const ProjectName = () => (
  <section className="project project-project-name">
    
    <Title
      text="Name" />
    
    <Introduction
      text="Text" />
    
    <Subtitle
      text="Brief Analysis" />
    
    <Image
      imgSrc="https://static.pexels.com/photos/20787/pexels-photo.jpg"
      ratio="768/448"
      imgAlt="Screenshot for Europcar wiremapping"
      caption="This is a picture of a cat!"
    />
    
    <TextBlock
      text="Text" />
    
    <Subtitle
      text="Discovery Phase" />
      
    <TextBlock
      text="Text" />
    
    <TextBlock
      text="Text" />
      
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
      text="Text" />
      
    <TextBlock
      text="Text" />
    
  </section>
)
