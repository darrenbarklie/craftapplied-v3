import React from 'react';
import { Row, Col } from 'react-flexbox-grid'


export const Footer = () => (
  <footer className="main">
    <Row>
      <Col xs={12} md={4}>
        <div>Email: hello@craftapplied.com</div>
      </Col>
      
      <Col xs={12} md={4}>
        <div>Phone: +44 (0) 208 123 0264</div>
      </Col>
      
      <Col xs={12} md={4}>
        <div>
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">LI</a>
          <a href="#">IN</a>
        </div>
      </Col>  
    </Row>
    
    <div className="line-break"></div>
    
    <Row>
      <Col xs={12} md={6}>
        &copy; Copyright 2018 Craft Applied. All Rights Reserved.
      </Col>
      
      <Col xs={12} md={6}>
        <a href="#">Privacy Policy</a>
      </Col>
      
    </Row>
  </footer> 
);
