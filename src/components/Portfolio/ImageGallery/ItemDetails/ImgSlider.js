import React from 'react'
import {Motion, spring} from 'react-motion'
import SquareBox from '../../../common/styling/SquareBox'
import Centered from '../../../common/styling/Centered'
import styled from 'styled-components'

const ImgNav = styled.div`
  &:hover span {
    visibility: visible !important;
    opacity: 1 !important;
    transition: all 0.2s;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImg: 0,
      totalImg: props.images.length,
      pos: {x: 0, w: 100}
    }
    this.img = {offsetWidth: 0}

    this.activeImgChanger = this.activeImgChanger.bind(this)
    this.resized = this.resized.bind(this)
  }
  activeImgChanger(x) {
    return x
      ? (
        this.state.activeImg < this.state.totalImg-1
        && this.setState({activeImg: this.state.activeImg+1})
      )
      : (
        this.state.activeImg !== 0
        && this.setState({activeImg: this.state.activeImg-1})
      )
  }
  resized() {
    this.setState({})
  }
  componentDidMount() {
    window.addEventListener('resize',this.resized)
  }
  componentWillUnmount() {
    window.removeEventListener('resize',this.resized)
  }
  render() {
    return (
      <div>
        <SquareBox>
          <Centered 
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '100%'
            }}
          >
            <ImgNav
              style={{
                position: 'absolute',
                zIndex: 2,
                width: '100%',
                height: '100%'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: '50%',
                  display: 'inline-block'
                }}
                {...this.state.activeImg !== 0
                    && {
                      onClick: e => this.setState({activeImg: this.state.activeImg-1})
                    }
                }
              >
                <Centered
                  style={{
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  {this.state.activeImg !== 0
                      && (
                        <span
                          style={{
                            marginLeft: '10%',
                            textShadow: '0 0 5px white',
                            color: '#333333',
                            visibility: 'hidden',
                            opacity: '0',
                            fontSize: '180%'
                          }}
                          className="typcn typcn-chevron-left"
                        />
                      )
                  }
                </Centered>
              </div>
              <div
                style={{
                  height: '100%',
                  width: '50%',
                  display: 'inline-block'
                }}
                {...this.state.activeImg !== this.props.images.length-1
                    && {
                      onClick: e => this.setState({activeImg: this.state.activeImg+1})
                    }
                }
              >
                <Centered
                  style={{
                    width: '100%',
                    textAlign: 'right'
                  }}
                >
                  {this.state.activeImg !== this.props.images.length-1
                      && (
                        <span
                          style={{
                            marginRight: '10%',
                            textShadow: '0 0 5px white',
                            color: '#333333',
                            visibility: 'hidden',
                            opacity: '0',
                            fontSize: '180%'
                          }}
                          className="typcn typcn-chevron-right"
                        />
                      )
                  }
                </Centered>
              </div>
            </ImgNav>
            <Motion
              defaultStyle={{x: (this.img.offsetWidth * this.state.activeImg)*(-1) + this.state.pos.x}}
              style={{x: spring(
                (this.img.offsetWidth * this.state.activeImg)*(-1)
                + this.state.pos.x,{precision: 1,stiffness: 150, damping: 25}
              )}}
            >
              {intStyle => {
                return (
                  <div
                    draggable="false"
                    style={{
                      whiteSpace: 'nowrap',
                      position: 'relative',
                      left: intStyle.x.toString() + 'px'
                    }}
                  >
                    {
                      this.props.images.map((item, i) => {
                        return (
                          <img
                            ref={ref => this.img = ref}
                            key={item.id}
                            draggable="false"
                            style={{
                              display: 'inline-block',
                              userSelect: 'none'
                            }}
                            src={item.url}
                            alt="Big"
                            width='100%'
                          />
                        )
                      })
                    }
                  </div>
                )
              }}
            </Motion>
          </Centered>
        </SquareBox>
      </div>
      )
      }
      }
