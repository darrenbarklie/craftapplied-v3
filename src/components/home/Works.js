import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'

import { WorkObject } from '../works'


export const Works = () => {
  return (
    <Row id="works" className="section">
      <Col xs={12}>
        <p>We've worked with clients from multiple industries:</p>
      </Col>

      <Col lg={6} md={6} sm={6} xs={12} className="col">
        <WorkObject
          title="Europcar Station App"
          type="UI/UX Design"
          linkTo=""
          imgSrc=""
          imgAlt=""
        />

      </Col>


    </Row>
  )
}
