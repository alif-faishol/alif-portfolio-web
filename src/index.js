import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import styled from 'styled-components'
import NavBar from './components/common/NavBar'
import HomePage from './components/HomePage'
import registerServiceWorker from './registerServiceWorker';

const Root = styled.div`
  background-color: rgb(204, 204, 255);
  width: 100%;
  height: 100%;
  position: absolute;
`

const Container = styled.div`
  position: relative;
  background-color: white;
  margin: auto;
  max-width: 800px;
`

render(
  <Root>
    <Container>
      <BrowserRouter>
        <div>
          <Route path='/' component={NavBar} />
          <Route exact path='/' component={HomePage} />
        </div>
      </BrowserRouter>
    </Container>
  </Root>, document.getElementById('root'));

registerServiceWorker();
