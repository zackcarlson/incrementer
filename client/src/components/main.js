import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import App from './container/App.js';
import '../styles.css';

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);