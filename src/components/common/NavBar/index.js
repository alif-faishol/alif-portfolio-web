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

injectGlobal(["@import url('https://fonts.googleapis.com/css?family=Cairo');"])

const StyledLink = styled(NavLink)`
  position: relative;
  display: table;
  height: 50px;
  font-size: 20px;
  background-color: inherit;
  width: 100%;
  color: white;
  :hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: white;
  }
  -webkit-font-smoothing: antialiased;
  display: block;
  font-family: 'Cairo', sans-serif;
  div:first-child {
    margin: 0;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-right: -50%;
  }
`

const LinkDesc = styled.div`
  display: table-cell;
  z-index: 1;
  vertical-align: middle;
  position: relative;
  height: 50px;
  box-shadow: 4px 3px 8px rgba(171, 171, 171, 0.5);
  padding: 0 20px;
  background-color: inherit;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  left: 0;
  transition: all 0.2s ease-out;
  p {
    margin: 0;
    display: block;
    z-index: 1;
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
      <StyledLink exact activeStyle={{backgroundColor: '#0099ff'}} to='/'>
        <div><span className="typcn typcn-home"></span></div>
        <LinkDesc><p>Homepage</p></LinkDesc>
      </StyledLink>
      <StyledLink activeStyle={{backgroundColor: '#0099ff'}} to='/portfolio'>
        <div><span className="typcn typcn-star"></span></div>
        <LinkDesc><p>Portfolio</p></LinkDesc>
      </StyledLink>
      <StyledLink activeStyle={{backgroundColor: '#0099ff'}} to='/about'>
        <div><span className="typcn typcn-info-large"></span></div>
        <LinkDesc><p>About</p></LinkDesc>
      </StyledLink>
    </Container>
  )
}
