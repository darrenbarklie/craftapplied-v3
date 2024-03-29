import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

import { ErrorBoundary, Header, Footer } from '.'
import { Home, About, Services, Projects, Contact } from '.'


export class Layout extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      windowWidth: 0,
      navResponsive: false,
      headerHeight: 0,
      dynamicPaddingTop: 0
    }

    this.setDynamicSizes = this.setDynamicSizes.bind(this)
  }
  
  setDynamicSizes() {
    // Get viewport width
    let windowWidth = window.innerWidth
    this.setState({ windowWidth })
    
    // Set state based on viewport width
    if(windowWidth < 1000) {
      this.setState({ navResponsive: true })
    } else {
      this.setState({ navResponsive: false })
    }

    // Get header height
    // TODO : This should be a callback function(?)
    let headerHeight = document.querySelector('header.main').clientHeight;
    this.setState({ headerHeight })
    
    // Add padding to headerHeight
    let dynamicPaddingTop = headerHeight + 32
    this.setState({ dynamicPaddingTop })
  }
  
  componentDidMount() {
    this.setDynamicSizes()
    window.addEventListener('resize', this.setDynamicSizes)
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.setDynamicSizes);
  }

  render() {
    return (
      <div id="layout">
  
        <Header
          windowWidth={this.state.windowWidth}
          navResponsive={this.state.navResponsive}
          headerHeight={this.state.headerHeight} />
  
        <Grid fluid className="grid-container stage" style={{paddingTop: this.state.dynamicPaddingTop}}>
          <Switch>
  
            <Route exact path="/" component={Home} />
  
            <Route path="/about" component={About} />
  
            <Route path="/services" component={Services} />
  
            <Route path="/projects" component={Projects} />
  
            {/* <Route path="/bytes" render={() => <h1>Bytes</h1>} /> */}
            
            {/* <Route path="/blog" render={() => <h1>Blog</h1>} /> */}
  
            <Route path="/contact" component={Contact} />
  
            <Route render={() => <h1>404</h1>} />
  
          </Switch>
          
        </Grid>
        
        <Footer />
  
      </div>
    )
  }
}
