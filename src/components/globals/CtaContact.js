import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

export const CtaContact = () => {
  return (
    <div className="cta-contact">
      <Row>
        <Col xs={12} md={7}>
          Are you working on your next digital product or a campaign for your business? We would be happy to deliver the creative factors of your requirements. Hit us up!
        </Col>
        
        <Col xs={12} mdOffset={1} md={4}>
          <a href="#" className="cta">Contact us</a>
        </Col>
      </Row>
      
    </div>
  )
}
