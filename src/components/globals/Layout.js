import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

import { ErrorBoundary, Header } from '.'
import { Home, Services, Projects, Contact } from '.'


export class Layout extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      headerHeight: 0,
      dynamicPaddingTop: 0
    }
    
    this.setPaddingHeight = this.setPaddingHeight.bind(this)
  }
  
  setPaddingHeight() {
    let headerHeight = document.querySelector('header.main').clientHeight;
    this.setState({ headerHeight })
    
    let dynamicPaddingTop = headerHeight + 32
    this.setState({ dynamicPaddingTop })
  }
  
  componentDidMount() {
    this.setPaddingHeight()
    window.addEventListener('resize', this.setPaddingHeight)
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.setPaddingHeight);
  }

  render() {
    return (
      <div id="layout">
  
        <Header headerHeight={this.state.headerHeight} />
  
        <Grid fluid className="grid-container stage" style={{paddingTop: this.state.dynamicPaddingTop}}>
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
}
