import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Centered from './styling/Centered'

const StyledDiv = styled.div`
  margin-bottom: 50px;
  text-align: right;
  color: white;
  div:hover a {
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: white;
    background-color: rgb(0, 153, 255);
  }
  a {
    position: relative;
    margin: 0 8px;
    width: 10px;
    height: 10px;
    background-color: rgb(153, 153, 153);
    border-radius: 100%;
    display: inline-block;
    font-size: 0;
    transition: all 0.2s;
    &.active {
      width: 20px;
      height: 20px;
      font-size: 12px;
      color: white;
    }
    p {
      margin: 0;
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  }
`

export default props => {
  const arr = []
  for (let i = 1; i<=props.pages; i++) {
    arr.push(props.baseUrl + i.toString())
  }
  return (
    <StyledDiv>
      {arr.map((arr,i) => {
        return (
          <div key={i+1} style={{display: 'inline-block'}}>
            <Centered>
              <Link
                to={arr}
                className={i+1 === props.active ? 'active' : ''}
              >
                <p>{i+1}</p>
              </Link>
            </Centered>
          </div>
        )
      })}
    </StyledDiv>
  )
}
