import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navigation } from '.'
import { Home } from '../home/Home'

export const Layout = () => {
  return (
    <div id="layout">
      <small>Layout</small>

      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/services" render={() => <h1>Services</h1>} />
        <Route path="/work" render={() => <h1>Work</h1>} />
        <Route path="/blog" render={() => <h1>Blog</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route render={() => <h1>404</h1>} />
      </Switch>

    </div>
  )
}
