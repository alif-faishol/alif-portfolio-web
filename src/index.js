import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './bootstrap.min.css'
import styled from 'styled-components'
import NavBar from './components/common/NavBar'
import HomePage from './components/HomePage'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/typicons.font/src/font/typicons.css'

const Root = styled.div`
  background-color: rgb(204, 204, 255);
  width: 100%;
  height: 100%;
  position: absolute;
`

const Container = styled.div`
  position: relative;
  @media (min-width: 1199px) and (max-width: 1280px) {
    margin: 0 50px;
  }
  @media (min-width: 992px) and (max-width: 1080px) {
    margin: 0 50px;
  }
  background-color: white;
`

const Helper = styled.div`
  @media (max-width: 767px) {
    background-color: white;
  }
`

render(
  <Root>
    <Helper className='container'>
      <Container>
        <BrowserRouter>
          <div>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={HomePage} />
          </div>
        </BrowserRouter>
      </Container>
    </Helper>
  </Root>, document.getElementById('root'));

registerServiceWorker();
