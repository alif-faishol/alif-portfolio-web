import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'
import {Motion, spring, presets} from 'react-motion'

const Content = styled.div`
  position: relative;
  border: 3px solid #eeeeee;
  overflow: hidden;
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
    span {
      display: block;
      ${props => props.isFailed ? '' : 'animation: 2s infinite rotate linear;'}
      @keyframes rotate {
        0% {
        }
        45% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(15deg);
        }
        55% {
          transform: rotate(-15deg);
        }
        60% {
          transform: rotate(0deg);
        }
        100% {
        }
      }
    }
    p {
      font-weight: 600;
      font-size: 20px;
    } 
  }
`

const StyledImg = styled.img`
  height: 100%;
  position: absolute;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isFailed: false,
      ani: {
        loadingAni: 0
      }
    }
    this.loaded = this.loaded.bind(this)
    this.failed = this.failed.bind(this)
  }
  loaded = () => {
    this.setState({
      isLoading: false,
      ani: {
        loadingAni: 100
      }
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
        <Content>
          <StyledImg
            isLoading={this.state.isLoading}
            src={this.props.thumbnail}
            alt="Thumbnail"
            onLoad={this.state.isLoading ? this.loaded : null}
            onError={this.state.isFailed ? null : this.failed}
          />
          <Motion defaultStyle={{y: 0}} style={{y: spring(this.state.ani.loadingAni, {precision: 10})}} >
            {intStyle =>
                intStyle.y !== 100 ?
                  <Loading
                    isLoading={this.state.isLoading}
                    isFailed={this.state.isFailed}
                    style={{
                      bottom: intStyle.y.toString() + '%'
                    }}>
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
                  </Loading> : null
            }
          </Motion>
        </Content>
      </SquareBox>
    )
  }
}
