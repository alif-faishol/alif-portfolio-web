import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Header from './components/common/Header'
import HomePage from './components/HomePage'
import TestPage from './TestPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={HomePage} />
      <Route path='/test' component={TestPage} />
    </div>
  </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
