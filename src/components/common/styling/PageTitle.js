import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-family: 'Cairo', sans-serif;
  padding-top: 40px;
  padding-bottom: 30px;
  h1 {
    font-size: 3em;
  }
`

export default (props) => {
  return (
    <Title>
      <h1>{props.title}</h1>
    </Title>
  )
}
