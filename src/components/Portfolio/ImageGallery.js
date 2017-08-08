import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
`

const Item = props => {
  const Container = styled.div`
    border: 1px solid black;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  `
  const Content = styled.div`
    position: absolute;
    background-image: ${'url(\'' + (props ? props.thumbnail : '') + '\')'} ;
    background-size: contain;
    width: 100%;
    height: 100%;
  `

  return (
    <Container className={props.className}>
      <Content thumbnail={props.thumbnail}>
      test
      </Content>
    </Container>
  )
}

export default props => {
  return (
    <Container className='row'>
      <Item className='col-xs-4' thumbnail={props ? props.thumbnail : ''}></Item>
      <Item className='col-xs-4'></Item>
      <Item className='col-xs-4'></Item>
      <Item className='col-xs-4'></Item>
    </Container>
  )
}
