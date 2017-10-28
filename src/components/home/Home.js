import React, { Component } from 'react'

import { Splash, Portfolio } from './'


export class Home extends Component {
  render() {
    return (
      <div className="page home">

        <Splash />

        <Portfolio />

      </div>
    )
  }
}
