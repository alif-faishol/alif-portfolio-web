import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 10%;
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
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    background-image: ${'url(\'' + (props ? props.thumbnail : '') + '\')'};
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  `
  return (
    <Container className={props.className}>
      <Content thumbnail={props.thumbnail}>
        {props.title}
      </Content>
    </Container>
  )
}


export default props => {
  return props.items ? (
    <Container className='row'>
      {props.items.map(index => {
        return (
          <Item className='col-xs-4'
            key={index.id}
            thumbnail={index.img}
            title={index.title}
          />
        )
      })}
    </Container>
  ) : null
}
