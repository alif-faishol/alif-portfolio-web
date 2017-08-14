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

const Loading = styled.div`
  display: ${props => props.isLoading ? 'block' : 'none'};
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  color: #777777;
  div {
    position: absolute;
    margin: 0;
    margin-right: -50%;
    top: 50%;
    font-size: 50px;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    p {
      font-weight: 600;
      font-size: 20px;
    } 
  }
`

const StyledImg = styled.img`
  display: ${props => props.isLoading ? 'none' : 'block'};
  height: 100%;
  width: 100%;
  animation: 1s 1 FadeIn;
  @keyframes FadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isFailed: false
    }
    this.loaded = this.loaded.bind(this)
    this.failed = this.failed.bind(this)
  }
  loaded = () => {
    this.setState({
      isLoading: false
    })
  }
  failed = () => {
    this.setState({
      isFailed: true
    })
  }
  render() {
    return (
      <SquareBox className={this.props.className} style={{marginBottom: '80px'}}>
        <Title>
          {this.props.title}
        </Title>
        <Content thumbnail={this.props.thumbnail}>
          <Loading isLoading={this.state.isLoading}>
            <div>
              <span className=
                {this.state.isFailed
                    ? 'typcn typcn-times'
                    : 'typcn typcn-watch'
                }>
              </span>
              <p>
                {this.state.isFailed
                    ? 'Can\'t Load Image'
                    : 'Loading Image'
                }
              </p>
            </div>
          </Loading>
          <StyledImg
            isLoading={this.state.isLoading}
            src={this.props.thumbnail}
            alt="Thumbnail"
            onLoad={this.state.isLoading ? this.loaded : null}
            onError={this.state.isFailed ? null : this.failed}
          />
        </Content>
      </SquareBox>
    )
  }
}
