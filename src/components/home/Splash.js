import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'

import { SplashGraphic } from '.'


export const Splash = () => {
  return (
    <Row id="splash" className="section">

      <Col xs={12} sm={9} md={7} lg={6} className="container-content">
        <h1>We are a creative agency dedicated to crafting valuable UI/UX solutions.</h1>
        <p>We answer client needs for digital creative services, sharing our expertise and experience in:</p>
        <ul className="list">
          <li>UI/UX Design</li>
          <li>Visual Design</li>
          <li>Web &amp; App Development</li>
        </ul>
        <Link to="/services" className="cta cta-animated">View our full services list</Link>
      </Col>

      <Col xs={12} sm={12} md={5} lg={6} className="container-graphic">
        <SplashGraphic />
      </Col>
    </Row>
  )
}
