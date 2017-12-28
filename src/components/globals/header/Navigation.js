import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';


export class Navigation extends Component {

  constructor(props) {
    super(props)

    this.state = { isResponsive: false }
    this.isResponsive = this.isResponsive.bind(this)
  }
  
  isResponsive() {
    let isResponsive = this.props.isResponsive
    this.setState({ isResponsive })
  }
  
  componentDidMount() {
    this.isResponsive()
  }

  render() {
    const isResponsive = this.state.isResponsive

    let menu = null;
    if (isResponsive === true) {
      menu = <NavigationMobile />
    } else {
      menu = <NavigationDesktop />
    }
    
    return (
      <div>
        
        {menu}
        
      </div>
    );
  }

}
