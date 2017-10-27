import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';

require('./sass/base.scss');
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'));
//registerServiceWorker();
