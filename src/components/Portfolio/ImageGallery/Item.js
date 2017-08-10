import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'

const Content = styled.div`
  background-image: url('${props => props.thumbnail}');
  background-size: contain;
  background-position: center;
  position: relative;
  box-shadow: 0 0 8px 1px #cccccc;
  transition: all 0.2s;
  background-repeat: no-repeat;
  height: 100%;
`

const Description = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
  height: 100%;
  transition: all 0.2s;
`

const Title = styled.div`
  font-family: 'Cairo', sans-serif;
  position: relative; 
  height: 50px;
`

export default props => {
  return (
    <SquareBox className={props.className} style={{marginBottom: '30px'}}>
      <Title>
        {props.title}
      </Title>
      <Content thumbnail={props.thumbnail}>
        <Description>
          {props.content}
        </Description>
      </Content>
    </SquareBox>
  )
}
