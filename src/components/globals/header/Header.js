import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import { NavLink } from 'react-router-dom'
import { Brand, Navigation } from '.'



export const Header = (props) => {
  return (
    <header className="main">
      
      <div className="header-container">
        
        <div className="brand">
          <NavLink exact activeClassName="active" to="/">
            <Brand />
          </NavLink>
        </div>
  
        <div className="nav-primary">
          
          <Navigation />
          
          {/* <button>Navigation</button> */}
  
        </div> 
      </div>
    </header>
  )
}
