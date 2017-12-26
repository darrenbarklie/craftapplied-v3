import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import { ProjectObject } from '../projects'
import { EuropcarImg1x, EnergeiaImg1x, GlobalPRImg1x, JLBImg1x } from '../../assets/img/works'


export const Projects = () => {
  return (
    <Row id="projects" className="section">
      <Col xs={12}>
        <p>We've worked with clients across multiple industries:</p>
      </Col>

      <Col xs={12} sm={6}>
        <ProjectObject
          title="Europcar Station Native App"
          type="UI/UX Design"
          linkTo="projects/europcar"
          ratio="2/3"
          style={{
            color: '#202124',
            backgroundImage: `url(${EuropcarImg1x})`,
            backgroundPosition: 'left top'
          }} />
      </Col>

      <Col xs={12} sm={6}>
        <ProjectObject
          title="EnergeiaWorks Website"
          type="Web Design & Development"
          linkTo="projects/energeiaworks"
          ratio="4/3"
          style={{
            color: '#202124',
            backgroundImage: `url(${EnergeiaImg1x})`,
            backgroundPosition: 'center top'
          }} />

        <ProjectObject
          title="Global PR Network Website"
          type="Web Design & Development"
          linkTo="projects/globalprnetwork"
          ratio="4/3"
          style={{
            color: '#ffffff',
            backgroundImage: `url(${GlobalPRImg1x})`,
            backgroundPosition: 'center center'
          }} />
      </Col>

      <Col xs={12}>
        <ProjectObject
          title="James LeBosquet Hairstyling Web App"
          type="Web App Design & Development"
          linkTo="projects/jameslebosquet"
          ratio="3/1"
          style={{
            color: '#202124',
            backgroundImage: `url(${JLBImg1x})`,
            backgroundPosition: 'center 10%'
          }} />
      </Col>

      <Col xs={12}>
        <Row center="xs">
          <Link to="/projects" className="cta cta-animated">View more of our projects</Link>
        </Row>
      </Col>
    </Row>
  )
}
