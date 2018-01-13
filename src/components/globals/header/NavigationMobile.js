import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { IconMenu } from '../../../assets/svg' 


export class NavigationMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <nav className="primary">
        <button onClick={this.handleClick} className="cta">
          {/* {this.state.isToggleOn ? 'Open Menu' : 'Close Menu'} */}
          <img src={IconMenu} alt="Menu icon"/>
          Menu
        </button>
        
        <div>
          
          {this.state.isToggleOn
            ? 
              <span>&nbsp;</span> 
            : 
            <div className="nav-mobile">
              <button onClick={this.handleClick} className="nav-close cta">
                &#x2716;
              </button>
              <ul>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/services">Services</NavLink></li>
                <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
                {/* <li><NavLink activeClassName="active" to="/bytes">Bytes</NavLink></li> */}
                {/* <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li> */}
                <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          } 
        </div>
        
      </nav>
    );
  }
}
