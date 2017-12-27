import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

import { ErrorBoundary, Header } from '.'
import { Home, Services, Projects, Contact } from '.'




// 
// function calcHeaderHeight() {
//   const headerHeight = document.querySelector('header.main').clientHeight;
// 
//   console.log(headerHeight);
// }



export class Layout extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      dynamicHeight: 0
    }
    
    this.setHeight = this.setHeight.bind(this)
  }
  
  setHeight() {
    let dynamicHeight = document.querySelector('header.main').clientHeight;
    
    
  
    this.setState({ dynamicHeight })
    
  
  //  console.log(headerHeight);
  }
  
  componentDidMount() {
    this.setHeight();
  }

  render() {
    return (
      <div id="layout">
  
        <Header />
  
        <Grid fluid className="grid-container stage" style={{paddingTop: this.state.dynamicHeight}}>
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
