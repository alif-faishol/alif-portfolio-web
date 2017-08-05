import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/common/Header'
import HomePage from './components/HomePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={HomePage} />
      </div>
    </BrowserRouter>
  </div>, document.getElementById('root'));

registerServiceWorker();
