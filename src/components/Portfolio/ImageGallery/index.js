import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.div`
  padding-bottom: 50px;
`

const Loading = props => {
  const StyledDiv = styled.div`
    background-color: white;
    width: 100%;
    height: 500px;
  div {
    position: relative;
    width: 100%;
    height: 100%;
    p {
      position: absolute;
      margin: 0;
      font-weight: 700;
      font-size: 3em;
      color: #cccccc;
      font-family: 'Cairo' sans-serif;
      margin-right: -50%;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  }
  `
  var dot = ''
  return (
    <StyledDiv>
      <div><p>Fetching data from API</p></div>
    </StyledDiv>
  )
}

export default props => {
  return (
    <Container>
      {props.items[0] ? (
      <div className='row'>
        {props.items.map(index => {
          return (
            <Item className='col-lg-4 col-sm-6'
              key={index.id}
              thumbnail={index.img}
              title={index.title}
              content={index.content}
            />
          )
        })}
      </div>
      ) : <Loading/>}
    </Container>
  )
}
