import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-family: 'Cairo', sans-serif;
  padding-top: 40px;
  padding-bottom: 30px;
  h1 {
    font-size: 3em;
    color: #242c36;
    font-weight: 300;
    text-shadow: 1px 1px 4px #cccccc;
  }
`

export default (props) => {
  return (
    <Title {...props}>
      <h1>{props.title}</h1>
    </Title>
  )
}
