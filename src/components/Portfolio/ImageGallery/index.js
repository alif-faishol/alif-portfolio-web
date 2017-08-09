import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.div`
  border: 1px solid black;
`

export default props => {
  return props.items ? (
    <Container className='row'>
      {props.items.map(index => {
        return (
          <Item className='col-lg-4 col-sm-6'
            key={index.id}
            thumbnail={index.img}
            title={index.title}
          />
        )
      })}
    </Container>
  ) : null
}
