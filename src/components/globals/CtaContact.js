import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

export const CtaContact = () => {
  return (
    <div className="cta-contact">
      <Row>
        <Col xs={12} sm={12} lg={7}>
          Are you working on your next digital product or a campaign for your business? We would be happy to deliver the creative factors of your requirements. Hit us up!
        </Col>
        
        <Col xs={12} sm={12} lgOffset={1} lg={4}>
          <a href="#" className="cta">Contact us</a>
        </Col>
      </Row>
      
    </div>
  )
}
