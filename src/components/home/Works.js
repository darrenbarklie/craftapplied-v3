import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import { CtaStandard } from '../globals'
import { WorkObject } from '../works'
import EuropcarImg from '../../assets/img/work/01-europcar@1x.jpg'
import EnergeiaImg from '../../assets/img/work/02-energeiaworks@1x.jpg'
import GlobalPRImg from '../../assets/img/work/03-globalpr@1x.jpg'
import JLBImg from '../../assets/img/work/04-jlb@1x.jpg'


export const Works = () => {
  return (
    <Row id="works" className="section">
      <Col xs={12}>
        <p>We've worked with clients across multiple industries:</p>
      </Col>

      <Col xs={12} sm={6}>
        <WorkObject
          title="Europcar Station Native App"
          type="UI/UX Design"
          linkTo="works/europcar"
          ratio="2/3"
          style={{
            color: '#202124',
            backgroundImage: `url(${EuropcarImg})`,
            backgroundPosition: 'left top'
          }} />
      </Col>

      <Col xs={12} sm={6}>
        <WorkObject
          title="EnergeiaWorks Website"
          type="Web Design & Development"
          linkTo="works/energeiaworks"
          ratio="4/3"
          style={{
            color: '#202124',
            backgroundImage: `url(${EnergeiaImg})`,
            backgroundPosition: 'center top'
          }} />

          <WorkObject
            title="Global PR Network Website"
            type="Web Design & Development"
            linkTo="works/globalprnetwork"
            ratio="4/3"
            style={{
              color: '#ffffff',
              backgroundImage: `url(${GlobalPRImg})`,
              backgroundPosition: 'center center'
            }} />
      </Col>

      <Col xs={12}>
        <WorkObject
          title="James LeBosquet Hairstyling Web App"
          type="Web App Design & Development"
          linkTo="works/jameslebosquet"
          ratio="3/1"
          style={{
            color: '#202124',
            backgroundImage: `url(${JLBImg})`,
            backgroundPosition: 'center top'
          }} />
      </Col>

      <Col xs={12}>
        <Row center="xs">
            <Link to="/works" className="cta cta-animated">View more of our works</Link>
        </Row>
      </Col>


    </Row>
  )
}
