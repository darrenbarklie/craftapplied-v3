import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

import App from './components/App'
require('./sass/base.scss')


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'))

//registerServiceWorker();
