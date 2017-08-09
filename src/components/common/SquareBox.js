import React from 'react'
import styled from 'styled-components'


export default props => {
  const Container = styled.div`
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  `
  const Square = styled.div`
    position: absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    padding: inherit;
    height: 100%;
  `
  return (
    <Container style={props.style} className={props.className}>
      <Square>
        {props.children}
      </Square>
    </Container>
  )
}
