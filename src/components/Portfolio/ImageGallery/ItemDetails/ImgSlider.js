import React from 'react'
import {Motion, spring} from 'react-motion'
import SquareBox from '../../../common/styling/SquareBox'
import Centered from '../../../common/styling/Centered'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImg: 0,
      totalImg: props.images.length,
      pos: {x: 0, w: 100}
    }
    this.initialPosX = 0
    this.touchOk = false
    this.img = {offsetWidth: 0}

    this.mouseDownHandler = this.mouseDownHandler.bind(this)
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.mouseUpHandler = this.mouseUpHandler.bind(this)
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    this.touchMoveHandler = this.touchMoveHandler.bind(this)
    this.touchDownHandler = this.touchDownHandler.bind(this)

    this.activeImgChanger = this.activeImgChanger.bind(this)
    this.resized = this.resized.bind(this)
  }
  mouseDownHandler(e) {
    this.initialPosX = e.pageX
    this.drag = true
  }
  mouseEnterHandler(e) {
    e.buttons === 1
      && (() => {
        this.initialPosX = e.pageX
        this.drag = true
      })()
  }
  touchDownHandler(e) {
    this.initialPosX = e.touches[0].screenX
    this.drag = true
  }
  mouseUpHandler(xPos) {
    this.initialPosX = 0
    this.touchOk = false
    this.setState({pos: {x: 0, w: 100}})
    xPos > (this.img.offsetWidth/4)
      ?
      (() => {
        this.activeImgChanger(false)
      })()
      : (
        (() => {
          xPos*(-1) > (this.img.offsetWidth/3)
            &&
            (() => {
              this.activeImgChanger(true)
            })()
          return true
        })()
      )
    this.drag = false
  }
  mouseMoveHandler(e) {
    let xPos = e.pageX-this.initialPosX
    return this.moveHandler(e.buttons === 1, xPos) === false
      && this.drag && this.mouseUpHandler()
  }
  touchMoveHandler(e) {
    let good = () => {
      this.touchOk = true
      return true
    }
    let xPos = e.touches[0].screenX-this.initialPosX
    this.moveHandler(this.touchOk ? true : Math.abs(xPos) > 30 && good(), xPos)
  }
  moveHandler(input, xPos) {
    return (
      this.drag &&
      input
      ? 
      (() => {
        (this.state.activeImg !== this.props.images.length-1 || xPos > 0)
          && (this.state.activeImg !== 0 || xPos < 0)
          &&
          this.setState({
            pos: {
              x: xPos/1.0
            }
          })
        return true
      })()
      : false
    )
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
            {...this.props.images.length>1 &&
                {
                  onMouseDown: this.mouseDownHandler,
                  onMouseUp: e => this.mouseUpHandler(e.pageX-this.initialPosX),
                  onMouseMove: this.mouseMoveHandler,
                  onMouseEnter: this.mouseEnterHandler,
                  onMouseLeave: this.mouseUpHandler,
                  onTouchStart: this.touchDownHandler,
                  onTouchEnd: e => this.mouseUpHandler(this.state.pos.x),
                  onTouchMove: this.touchMoveHandler
                }
            }
          >
            <div
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
                            fontSize: '180%'
                          }}
                          className="typcn typcn-chevron-right"
                        />
                      )
                  }
                </Centered>
              </div>
            </div>
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
