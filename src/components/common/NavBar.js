import React from 'react'
import {NavLink} from 'react-router-dom'
import styled, {injectGlobal} from 'styled-components'

const Container = styled.nav`
  position: absolute;
  background-color: #333333;
  top: 20px;
  color: blue;
  width: 50px;
  z-index: 0;
  box-shadow: 3px 3px 8px rgba(171, 171, 171, 0.5);
  @media (min-width: 992px) {
    left: -50px;
    box-shadow: -4px 3px 8px rgba(171, 171, 171, 0.5);
  }
`

injectGlobal(["@import url('https://fonts.googleapis.com/css?family=Actor');"])

const StyledLink = styled(NavLink)`
  position: relative;
  height: 50px;
  font-size: 20px;
  width: 100%;
  color: white;
  -webkit-font-smoothing: antialiased;
  :hover {
    color: red;
  }
  display: block;
  font-family: 'Actor', sans-serif;
  div:first-child {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-right: -50%;
  }
`

const LinkDesc = styled.div`
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  height: 50px;
  padding: 0 20px;
  background-color: #333333;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  left: 0;
  transition: all 0.2s ease-out;
  transition-delay: 0.2s;
  p {
    margin: 0;
  }
  ${StyledLink}:hover & {
    visibility: visible;
    opacity: 1;
    left: 50px;
  }
`

export default () => {
  return (
    <Container>
      <StyledLink activeStyle={{backgroundColor: '#0099ff'}} to='/'>
        <div>/</div>
        <LinkDesc><p>Homepage</p></LinkDesc>
      </StyledLink>
      <StyledLink activeStyle={{backgroundColor: '#0099ff'}} to='/portfolio'>
        <div>/</div>
        <LinkDesc><p>Portfolio</p></LinkDesc>
      </StyledLink>
      <StyledLink activeStyle={{backgroundColor: '#0099ff'}} to='/about'>
        <div>/</div>
        <LinkDesc><p>About</p></LinkDesc>
      </StyledLink>
    </Container>
  )
}
