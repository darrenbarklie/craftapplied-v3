import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';


export class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = { navResponsive: false}
  }
  
  componentWillReceiveProps(newProps) {
    this.setState({navResponsive: newProps.navResponsive});
  }
  
  render() {
    let menu = null;
    
    if (this.state.navResponsive === true) {
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
