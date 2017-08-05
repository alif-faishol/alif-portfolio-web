import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
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
  display: table-cell;
  vertical-align: middle;
  height: 50px;
  font-size: 20px;
  width: 100%;
  color: white;
  font-family: 'Fira Code', sans-serif;
`

export default () => {
  return (
    <Container>
      <StyledLink to='/'><div>&lt;/&gt;</div></StyledLink>
    </Container>
  )
}
