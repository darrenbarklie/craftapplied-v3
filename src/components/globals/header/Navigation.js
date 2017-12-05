import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navigation = () => {
  return (
    <nav className="primary">
      <ul>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/services">Services</NavLink></li>
        <li><NavLink activeClassName="active" to="/works">Works</NavLink></li>
        <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
        <li><NavLink activeClassName="active" to="/bytes">Bytes</NavLink></li>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
