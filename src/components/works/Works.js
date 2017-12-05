import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import { WorkObject } from '.'
import { EuropcarImg1x, EnergeiaImg1x, GlobalPRImg1x, JLBImg1x } from '../../assets/img/works'


export const Works = () => {
  return (

    <Row className="page works">

      <Row id="works" className="section">
        <Col xs={12}>
          <p>We've collaborated with clients across multiple industries:</p>
        </Col>

        <Col xs={12} sm={6}>
          <WorkObject
            title="Europcar Station Native App"
            type="UI/UX Design"
            linkTo="/europcar"
            ratio="2/3"
            style={{
              color: '#202124',
              backgroundImage: `url(${EuropcarImg1x})`,
              backgroundPosition: 'left top'
            }} />
        </Col>

        <Col xs={12} sm={6}>
          <WorkObject
            title="EnergeiaWorks Website"
            type="Web Design & Development"
            linkTo="/energeiaworks"
            ratio="4/3"
            style={{
              color: '#202124',
              backgroundImage: `url(${EnergeiaImg1x})`,
              backgroundPosition: 'center top'
            }} />

            <WorkObject
              title="Global PR Network Website"
              type="Web Design & Development"
              linkTo="/globalprnetwork"
              ratio="4/3"
              style={{
                color: '#ffffff',
                backgroundImage: `url(${GlobalPRImg1x})`,
                backgroundPosition: 'center center'
              }} />
        </Col>

        <Col xs={12}>
          <WorkObject
            title="James LeBosquet Hairstyling Web App"
            type="Web App Design & Development"
            linkTo="/jameslebosquet"
            ratio="3/1"
            style={{
              color: '#202124',
              backgroundImage: `url(${JLBImg1x})`,
              backgroundPosition: 'center 10%'
            }} />
        </Col>
      </Row>
    </Row>
  )
}
