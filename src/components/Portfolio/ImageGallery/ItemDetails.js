import React from 'react'
import styled from 'styled-components'
import api from '../../../api'

const Container = styled.div`
  z-index: 101;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  overflow: scroll;
`

const ContentContainer = styled.div`
  padding: 50px;
  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`

const Content = styled.div`
  background-color: white;
  width: 400px;
  vertical-align: middle;
  display: inline-block;
  font-size: 50px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsData : {},
      isLoading: true,
      isError: false
    }
    this.getDetails = this.getDetails.bind(this)
  }
  componentWillMount() {
    document.body.style.overflow = 'hidden'
  }
  componentWillUnmount() {
    document.body.style.overflow = 'initial'
  }
  getDetails(id) {
    api
  }
  render() {
    return (
      <Container onClick={this.props.itemDetailsHandler}>
        <ContentContainer>
          <Content onClick={event => event.stopPropagation()}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Content>
        </ContentContainer>
      </Container>
    )
  }
}
