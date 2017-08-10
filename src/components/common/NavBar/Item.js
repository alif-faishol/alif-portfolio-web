import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import {NavLink} from 'react-router-dom'

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
  -mox-osx-font-smoothing: grayscale;
  display: block;
  font-family: 'Cairo', sans-serif;
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
    display: none;
    z-index: 1;
    ${StyledLink}:hover & {
      display: block;
    }
  }
  ${StyledLink}:hover & {
    visibility: visible;
    opacity: 1;
    left: 50px;
  }
`

export default props => {
  return (
    <StyledLink {...props} activeStyle={{backgroundColor: '#0099ff'}}>
      <div><span className={'typcn typcn-' + props.icon}></span></div>
      <LinkDesc><p>{props.value}</p></LinkDesc>
    </StyledLink>
  )
}
