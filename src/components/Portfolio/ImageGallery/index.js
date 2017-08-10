import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.div`
  padding-bottom: 50px;
`

export default props => {
  return (
    <Container>
      {props.items ? (
      <div className='row'>
        {props.items.map(index => {
          return (
            <Item className='col-lg-4 col-sm-6'
              key={index.id}
              thumbnail={index.img}
              title={index.title}
            />
          )
        })}
      </div>
      ) : null}
    </Container>
  )
}
