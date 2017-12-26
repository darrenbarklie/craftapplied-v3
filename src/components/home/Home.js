import React, { Component } from 'react'
import { Row } from 'react-flexbox-grid'

import { Splash, Projects } from '.'


export class Home extends Component {
  render() {
    return (
      <Row className="page home">

        <Splash />

        <Projects />

      </Row>
    )
  }
}
