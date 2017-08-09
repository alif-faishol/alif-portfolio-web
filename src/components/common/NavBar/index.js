import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.nav`
  position: absolute;
  background-color: #242c36;
  top: 20px;
  color: blue;
  width: 50px;
  left: 0;
  box-shadow: 3px 3px 8px rgba(171, 171, 171, 0.5);
  @media (min-width: 992px) {
    left: -50px;
    box-shadow: -4px 3px 8px rgba(171, 171, 171, 0.5);
  }
`


export default () => {
  return (
    <Container>
      <Item
        exact
        to='/'
        icon='home'
        value='Homepage'
      />
      <Item
        to='/portfolio'
        icon='star'
        value='Portfolio'
      />
      <Item
        to='/about'
        icon='info-large'
        value='About'
      />
    </Container>
  )
}
