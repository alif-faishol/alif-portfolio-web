import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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

const StyledLink = styled(Link)`
  position: relative;
  height: 50px;
  font-size: 20px;
  width: 100%;
  color: white;
  display: block;
  font-family: 'Fira Code', sans-serif;
  > * {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-right: -50%;
  }
`

export default () => {
  return (
    <Container>
      <StyledLink to='/'>
        <div>/</div>
      </StyledLink>
      <StyledLink to='/'>
        <div>/</div>
      </StyledLink>
      <StyledLink to='/'>
        <div>/</div>
      </StyledLink>
      <StyledLink to='/'>
        <div>/</div>
      </StyledLink>
    </Container>
  )
}
