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
    height: ${window.innerHeight - 250}px;
    div {
      position: relative;
      width: 100%;
      height: 100%;
      p {
        position: absolute;
        margin: 0;
        font-weight: 700;
        font-size: 3em;
        @media (max-width: 767px) {
          font-size: 1.8em;
        }
        color: #cccccc;
        font-family: 'Cairo' sans-serif;
        margin-right: -50%;
        display: block;
        top: 50%;
        left: ${props => props.error ? '50%' : '45%'};
        transform: translate(-50%, -50%);
        span {
          position: absolute;
        }
      }
    }
  `
  const LoadingAniInv = setInterval(
    () => {
      const dot = this.APILoadingText
      dot
        ? (dot.innerHTML.length < 3
          ? dot.innerHTML += '.'
          : dot.innerHTML = '')
        : clearInterval(LoadingAniInv)
    }, 500)
  return (
    <StyledDiv>
      <div>
        {props.error ?
            <p>Can't connect to the API server</p> : 
            <p>Fetching data from API
              <span ref={ref => this.APILoadingText = ref}></span>
            </p>
        }
      </div>
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
      ) : <Loading error={props.error}/>}
    </Container>
  )
}
