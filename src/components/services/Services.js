import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import DesignImg from '../../assets/img/services/illus-design.svg'
import DevImg from '../../assets/img/services/illus-dev.svg'
import BuildImg from '../../assets/img/services/illus-build.svg'



export class Services extends Component {
  render() {
    return (
      <Row className="page services">
        <Col>

          <Row className="design-services">
            <Col xs={12} md={4}>
              <img src={DesignImg} alt="Design illustration" />
            </Col>

            <Col xs={12} md={8}>

              <h2>Design Services</h2>
              <p>Our user-focused approach to design ensures solutions are efficient, effective, and attractive.</p>

              <h3>Creative &amp; Research</h3>
              <ul>
                <li>Market Research</li>
                <li>User Profile</li>
                <li>Creative Direction</li>
                <li>Experience Design</li>
                <li>Interactive Design</li>
                <li>Visual Design</li>
                <li>Rapid Prototyping</li>
                <li>Design System</li>
              </ul>

              <h3>Tools</h3>
              <ul>
                <li>Pencil &amp; Paper</li>
                <li>OmniGraffle</li>
                <li>Sketch App</li>
                <li>Adobe Creative Suite</li>
                <li>Framers</li>
                <li>InVision</li>
                <li>Zeplin</li>
              </ul>

            </Col>
          </Row>

          <Row className="development-services">
            <Col xs={12} md={8}>

              <h2>Developement Services</h2>
              <p>We are fluent with many of the latest modern open-source languages and frameworks.</p>

              <h3>Languages</h3>
              <ul>
                <li>HTML5</li>
                <li>PHP</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>JSON</li>
                <li>MySQL</li>
              </ul>

              <h3>Technologies</h3>
              <ul>
                <li>WordPress</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>Bootstrap</li>
                <li>REST API</li>
                <li>MongoDB</li>
                <li>Angular</li>
                <li>Drupal</li>
              </ul>
            </Col>

            <Col xs={12} md={4}>
              <img src={DevImg} alt="Development illustration" />
            </Col>
          </Row>

          <Row className="build-services">
            <Col xs={12}>
              <img src={BuildImg} alt="Build illustration" />
            </Col>

            <Col xs={12}>

              <h2>What We Build</h2>
              <p>We produce assets, resources and systems to effeciently evaluate, test and solve business and creative challenges:</p>

              <ul>
                <li>Websites</li>
                <li>Native &amp; Web Apps</li>
                <li>Intranets</li>
                <li>Enterprise Software</li>
                <li>Information Architecture</li>
                <li>Experience Map</li>
                <li>Wireframe</li>
                <li>Storyboard</li>
                <li>UI Design System</li>
                <li>Customised Icons &amp; Illustration</li>
                <li>Interactive Prototype</li>
                <li>Front-end Toolkit</li>
                <li>Front-end Template</li>
                <li>Print Design</li>
                <li>Branding Kit</li>
              </ul>

            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

{/* Design services
Development Services
What We Build */}
