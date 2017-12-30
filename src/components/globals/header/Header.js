import React from 'react'
import { Row } from 'react-flexbox-grid'
import { NavLink } from 'react-router-dom'
import { Brand, Navigation } from '.'


export const Header = (props) => {
  return (
    <header className="main">
  
      <div className="header-container">
  
        <NavLink exact className="brand" activeClassName="active" to="/">
          <Brand />
        </NavLink>

        <Navigation windowWidth={props.windowWidth} navResponsive={props.navResponsive} />
  
      </div>
    </header>
  )
}
