import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default props => {
  const arr = []
  for (let i = 1; i<=props.pages; i++) {
    arr.push(props.baseUrl + i.toString())
  }
  const StyledDiv = styled.div`
    margin-bottom: 50px;
    a {
      position: relative;
      margin: 0 10px;
      width: 30px;
      height: 30px;
      display: inline-block;
      border: 1px solid #cccccc;
      &.active {
        color: red;
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
  return (
    <StyledDiv style={{textAlign: 'center'}}>
      {arr.map((arr,i) => {
        return (
            <Link
              key={i+1}
              to={arr}
              className={i+1 === props.active ? 'active' : ''}
            >
              <p>{i+1}</p>
            </Link>
        )
      })}
    </StyledDiv>
  )
}
