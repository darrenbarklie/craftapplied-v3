import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

import { ErrorBoundary, Header } from '.'
import { Home, Services, Projects, Contact } from '.'


export const Layout = () => {
  return (
    <div id="layout">

      <Header />

      <Grid fluid className="grid-container stage">
        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/about" render={() => <h1>About</h1>} />

          <Route path="/services" component={Services} />

          <Route path="/projects" component={Projects} />

          <Route path="/blog" render={() => <h1>Blog</h1>} />

          <Route path="/contact" component={Contact} />

          <Route render={() => <h1>404</h1>} />

        </Switch>
      </Grid>

    </div>
  )
}
