import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import TestPage from './TestPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path='/' component={App} />
      <Route path='/test' component={TestPage} />
    </div>
  </HashRouter>, document.getElementById('root'));

registerServiceWorker();
