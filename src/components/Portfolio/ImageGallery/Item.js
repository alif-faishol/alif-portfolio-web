import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'

const Content = styled.div`
  position: relative;
  border: 3px solid #eeeeee;
  transition: all 0.2s;
  height: 100%;
`

const Title = styled.div`
  font-family: 'Cairo', sans-serif;
  color: #333333;
  font-size: 1.1em;
  font-weight: 600;
  position: relative; 
  padding-bottom: 15px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  loaded = () => {
    this.setState({
      isLoading: false
    })
  }
  render() {
    return (
      <SquareBox className={this.props.className} style={{marginBottom: '80px'}}>
        <Title>
          {this.props.title}
        </Title>
        <Content thumbnail={this.props.thumbnail}>
          <div style={{display: this.state.isLoading ? 'block' : 'none'}}>
            Loading
          </div>
          <img
            style={{
              visibility: this.state.isLoading ? 'hidden' : 'visible',
              height: '100%',
              width: '100%'
            }}
            src={this.props.thumbnail}
            alt="Thumbnail"
            onLoad={this.state.isLoading ? this.loaded.bind(this) : null}
          />
        </Content>
      </SquareBox>
    )
  }
}
