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
injectGlobal(["html,html>body,html>body>#root{height:100%;}"])

const RootDiv = styled.div`
  background-color: white;
  font-family: 'Cairo', sans-serif;
`

render(
  <BrowserRouter>
    <RootDiv className='container-fluid' style={{height: '100%', minHeight: '500px', maxWidth: '1600px'}}>
      <Helmet>
        <meta property="og:title" content="Homepage of Alif's Website" />
        <meta property="og:description" content="Here lies some of Alif's works, and possibly there will be some article." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://alif-faishol.github.io/" />
        <meta name="twitter:card" content="/thumbnail.png" />
        <meta property="og:site_name" content="Alif's Portfolio Website" />
        <meta name="twitter:image:alt" content="Logo of Alif Faishol" />
      </Helmet>
      <div className='row'>
        <div className='col-lg-offset-1 col-md-1 col-sm-2 col-xs-12'>
          <NavBar/>
        </div>
        <div className='col-lg-8 col-md-10 col-sm-8 col-xs-12'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about' component={About} />
        </div>
      </div>
    </RootDiv>
  </BrowserRouter>, document.getElementById('root'))

registerServiceWorker()
