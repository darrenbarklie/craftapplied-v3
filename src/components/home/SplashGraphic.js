import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'
import AspectRatio from 'react-aspect-ratio'

import SplashImg from '../../assets/img/home/graphic-splash.png'


export const SplashGraphic = () => {

  function calcViewportHgt() {
    // TODO : Dynamically calculate section height
  }
  calcViewportHgt()

  return (
    <div className="splash-graphic">
      <AspectRatio
        ratio="496/720"
        style={{
          backgroundImage: `url(${SplashImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          maxHeight: 600,
          margin: '0 auto'
        }}
      />
    </div>
  )
}
