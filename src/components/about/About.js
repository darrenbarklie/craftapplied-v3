import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import AspectRatio from 'react-aspect-ratio'

import HeaderImg from '../../assets/img/about/graphic-header.jpg';


export class About extends Component {
  render() {
    return (
      <div className="page about">
        <Row center="xs">
          <Col xs={12} sm={10} md={8} className="introduction">
            <h1 className="display-text">About Us</h1>
            <p className="title-text">We are small team of designers and developers, based on the Isle of Man, United Kingdom.</p>
            <p className="subheader-text">We support a network of international clients based across the United States, Europe and Asia.</p>
          </Col>
          
          <div className="header-graphic">
            <AspectRatio
              ratio="1440/720"
              style={{
                backgroundImage: `url(${HeaderImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                margin: '0 auto'
              }}
            />
          </div>
          
        </Row>
      </div>
    )
  }
}
