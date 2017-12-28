import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import { NavLink } from 'react-router-dom'
import { Brand, Navigation } from '.'


export const Header = (props) => {

  return (
    <header className="main">
  
      <div className="header-container">
  
        <NavLink exact className="brand" activeClassName="active" to="/">
          <Brand />
        </NavLink>

        {/* TODO : Conditional isResponsive based on windowWidth */}

        <Navigation windowWidth={ props.windowWidth } isResponsive={ true } />
  
      </div>
    </header>
  )
}
