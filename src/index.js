import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/common/NavBar'
import HomePage from './components/HomePage'
import registerServiceWorker from './registerServiceWorker';

render(
  <div style={{ position: 'relative' }}className='container' >
    <BrowserRouter>
      <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={HomePage} />
      </div>
    </BrowserRouter>
  </div>, document.getElementById('root'));

registerServiceWorker();
