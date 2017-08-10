import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'

const Content = styled.div`
  background-image: url('${props => props.thumbnail}');
  background-size: contain;
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
