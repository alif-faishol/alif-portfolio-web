import React from 'react'
import {render} from 'react-snapshot'
import {BrowserRouter, Route} from 'react-router-dom'
import './bootstrap.min.css'
import styled, {injectGlobal} from 'styled-components'
import {Helmet} from 'react-helmet'
import NavBar from './components/common/NavBar'
import HomePage from './components/HomePage'
import Portfolio from './components/Portfolio'
import About from './components/About'
import registerServiceWorker from './registerServiceWorker'
import '../node_modules/typicons.font/src/font/typicons.css'

injectGlobal(["@import url('https://fonts.googleapis.com/css?family=Cairo:200,400,600');"])

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

const PageContainer = styled.div`
  padding: 0 100px;
  @media (max-width: 767px) and (min-width: 600px) {
    width: 550px;
    margin: auto;
  }
  @media (max-width: 599px) {
    padding: 0 10%;
  }
`

render(
  <BrowserRouter>
    <div className='container'>
      <Helmet>
        <meta property="og:title" content="Homepage of Alif's Website" />
        <meta property="og:description" content="Here lies some of Alif's works, and possibly there will be some article." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://alif-faishol.github.io/" />
        <meta name="twitter:card" content="/thumbnail.png" />
        <meta property="og:site_name" content="Alif's Portfolio Website" />
        <meta name="twitter:image:alt" content="Logo of Alif Faishol" />
      </Helmet>
      <Container style={{position: 'fixed', zIndex: '99'}}>
        <NavBar/>
      </Container>
      <Container>
        <PageContainer>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
        </PageContainer>
      </Container>
    </div>
  </BrowserRouter>, document.getElementById('root'))

registerServiceWorker()
