import React from 'react'
import AspectRatio from 'react-aspect-ratio'


export const Image = (props) => (
  <AspectRatio className="img-container"
    style={{
      backgroundImage: `url(${props.imgSrc})`}}
    ratio={props.ratio}>
    
    <p>{props.imgAlt}</p>
  
    <div className="caption">{props.caption}</div>
  </AspectRatio>
)
