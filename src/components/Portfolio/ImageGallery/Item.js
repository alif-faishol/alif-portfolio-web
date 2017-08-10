import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'

const Content = styled.div`
  background-image: url('${props => props.thumbnail}');
  background-size: contain;
  position: relative;
  box-shadow: 0 0 8px 1px #cccccc;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 8px 4px #cccccc;
  }
  background-repeat: no-repeat;
  height: 100%;
`

const Description = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
  height: 100%;
  transition: all 0.2s;
  ${Content}:hover & {
    background-color: rgba(255, 255, 255, 0.8);
    visibility: visible;
  }
`

export default props => {
  return (
    <SquareBox className={props.className} style={{marginBottom: '30px'}}>
      <Content thumbnail={props.thumbnail}>
        <Description>
          {props.content}
        </Description>
        {props.title}
      </Content>
    </SquareBox>
  )
}
