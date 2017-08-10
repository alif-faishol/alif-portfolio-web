import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'

const Content = styled.div`
  background-image: url('${props => props.thumbnail}');
  background-size: contain;
  box-shadow: 0 0 8px 1px #cccccc;
  transition: all 0.2s;
  padding: 10%;
  &:hover {
    box-shadow: 0 0 8px 4px #cccccc;
  }
  background-repeat: no-repeat;
  height: 100%;
`

export default props => {
  const thumbnail = (
    props.thumbnail ?
    props.thumbnail :
    ''
  )
  const className = (
    props.className ?
    props.className :
    ''
  )
  return (
    <SquareBox className={className}>
      <Content thumbnail={thumbnail}>
        {props.title}
      </Content>
    </SquareBox>
  )
}
