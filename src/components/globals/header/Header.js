import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { NavLink } from 'react-router-dom'
import { Brand, Navigation } from '.'

export const Header = (props) => {
  return (
    <header className="main">
      <Grid fluid className="grid-container">
        <Row>

        <Col className="brand">
          <NavLink exact activeClassName="active" to="/">
            <Brand />
          </NavLink>
        </Col>

        <Col className="nav-primary">
          <Navigation />
        </Col>

        </Row>
      </Grid>
    </header>
  )
}
