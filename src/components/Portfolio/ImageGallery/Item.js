import React from 'react'
import styled from 'styled-components'
import SquareBox from '../../common/styling/SquareBox'
import {Motion, spring} from 'react-motion'

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  border: 1px solid #cccccc;
`

const Loading = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #e9ecec;
  color: #666666;
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
      font-size: 25px;
      font-family: 'Cairo', sans-serif;
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
  shouldComponentUpdate(p,s) {
    return s.isLoading === this.state.isLoading
      ? false
      : true
  }
  loaded() {
    this.setState({
      isLoading: false,
      ani: {
        loadingAni: 100
      }
    })
  }
  failed() {
    this.setState({
      isFailed: true
    })
  }
  render() {
    return (
      <SquareBox className={this.props.className} style={{marginBottom: '30px'}}>
        <Content>
          <StyledImg
            src={this.props.thumbnail}
            alt="Thumbnail"
            onClick={this.props.itemDetailsHandler}
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
