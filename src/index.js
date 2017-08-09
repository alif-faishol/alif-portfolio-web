import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import './bootstrap.min.css'
import styled from 'styled-components'
import NavBar from './components/common/NavBar'
import HomePage from './components/HomePage'
import Portfolio from './components/Portfolio'
import About from './components/About'
import registerServiceWorker from './registerServiceWorker'
import '../node_modules/typicons.font/src/font/typicons.css'

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: scroll;
  background-color: #eeeeee;
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

const PageContainer = styled.div`
  padding: 0 100px;
`

render(
  <BrowserRouter>
    <Root>
      <Helper className='container'>
        <Route path='/'>
          <Container style={{position: 'fixed', zIndex: '99'}}>
            <NavBar/>
          </Container>
        </Route>
        <Container>
          <PageContainer>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about' component={About} />
          </PageContainer>
        </Container>
      </Helper>
    </Root>
  </BrowserRouter>, document.getElementById('root'))

registerServiceWorker()
