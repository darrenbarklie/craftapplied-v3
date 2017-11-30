import React, { Component } from 'react'

import { Row, Col } from 'react-flexbox-grid'

import { WorkObject } from '../works'


import TestImg from '../../assets/img/work/04-jlb@1x.jpg'

export const Works = () => {
  return (
    <Row id="works" className="section">
      <Col xs={12}>
        <p>We've worked with clients from multiple industries:</p>
      </Col>

      <Col lg={6} md={6} sm={6} xs={12} className="col">

        <WorkObject
          title="James LeBosquet"
          type="App Design & Development"
          linkTo="works/jlb"
          ratio="2/3"
          style={{
            color: '#202124',
            backgroundImage: `url(${TestImg})`,
            backgroundPosition: 'center center'
          }} />



      </Col>
    </Row>
  )
}
