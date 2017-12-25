import React from 'react'

{/*  TODO : Add aspect ratio plugin and props */}

export const Image = (props) => (
  <div className="img-wrapper">
    <img src={props.imgSrc} alt={props.imgAlt} style={{maxWidth: '100%', height: 'auto'}} />
    <div className="caption">{props.caption}</div>
  </div>
)