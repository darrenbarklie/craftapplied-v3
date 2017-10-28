import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Navigation } from '.'


export const Layout = () => {
  return (
    <div id="layout">
      <small>Layout</small>

      <Navigation />

      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route path="/services" render={() => <h1>Services</h1>} />
      <Route path="/work" render={() => <h1>Work</h1>} />
      <Route path="/blog" render={() => <h1>Blog</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />

    </div>
  )
}
