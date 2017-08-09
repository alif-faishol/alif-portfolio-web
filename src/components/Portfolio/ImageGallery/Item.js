import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/SquareBox'

export default props => {
  const Content = styled.div`
    background-image: ${'url(\'' + (props ? props.thumbnail : '') + '\')'};
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  `

  return (
    <SquareBox className={props.className}>
        <Content thumbnail={props.thumbnail}>
          {props.title}
        </Content>
    </SquareBox>
  )
}
