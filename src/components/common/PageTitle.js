import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-family: 'Cairo', sans-serif;
  padding-top: 45px;
  padding-left: 86px;
  padding-bottom: 50px;
  h1 {
    font-size: 2.5em;
  }
`

export default (props) => {
  return (
    <Title>
      <h1>{props.title}</h1>
    </Title>
  )
}
