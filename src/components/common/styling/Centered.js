import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  font-size: 0;
  height: 100%;
  white-space: nowrap;
  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`

const Centered = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: initial;
`

export default props => {
  return (
    <Container>
      <Centered {...props}>
        {props.children}
      </Centered>
    </Container>
  )
}
