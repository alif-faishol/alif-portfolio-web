import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
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

export default props => {
  return (
    <Container {...props}>
      <Square>
        {props.children}
      </Square>
    </Container>
  )
}
