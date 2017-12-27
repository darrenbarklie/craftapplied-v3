import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

export class Navigation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isResponsive: false
    }
    
    this.isResponsive = this.isResponsive.bind(this)
  }
  
  
  
  isResponsive() {
    let isResponsive = this.props.isResponsive
    this.setState({ isResponsive })
  }
  
  componentDidMount() {
    this.isResponsive()
  }
  

  render() {
    const isResponsive = this.state.isResponsive

    let menu = null;
    if (isResponsive === true) {
      menu = <h1>Mobile Menu</h1>
    } else {
      menu = <h1>Desktop Menu</h1>
    }
    
    
    return (
      <div>
        
        {menu}
        
      </div>
    );
  }

}






// export const Navigation = () => {
//   return (
//     <nav className="primary">
//       <button id="nav-close" className="cta">
//         &#x2716;
//       </button>
//       <ul>
//         <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
//         <li><NavLink activeClassName="active" to="/services">Services</NavLink></li>
//         <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
//         <li><NavLink activeClassName="active" to="/bytes">Bytes</NavLink></li>
//         <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
//         <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
//       </ul>
//     </nav>
//   )
// }
