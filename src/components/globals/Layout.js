import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

import { ErrorBoundary, Header } from '.'
import { Home, Contact } from '.'


export const Layout = () => {
  return (
    <div id="layout">

      <Header />

      <Grid fluid className="grid-container stage">
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={Home} />
          </ErrorBoundary>
          
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="/services" render={() => <h1>Services</h1>} />
          <Route path="/work" render={() => <h1>Work</h1>} />
          <Route path="/blog" render={() => <h1>Blog</h1>} />

          <ErrorBoundary>
            <Route path="/contact" component={Contact} />
          </ErrorBoundary>

          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Grid>

    </div>
  )
}
