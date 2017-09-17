import React from 'react'
import styled from 'styled-components'
import {Motion, spring} from 'react-motion'
import {portfolioItemDetails} from '../../../../api'
import ImgSlider from './ImgSlider'
import Centered from '../../../common/styling/Centered'

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
  overflow-y: scroll;
  animation: 0.2s 1 fadeIn;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Content = styled.div`
  position: relative;
  height: 90%;
  min-height: 450px;
  background-color: transparent;
  padding: 50px 0;
  @media (max-width: 500px) {
    width: 100%;
  }
  div.container {
    background-color: white;
    @media (max-width: 991px) {
      max-width: 500px;
    }
  }
  h3 {
    margin-top: 0;
    text-align: left;
    font-family: 'Cairo', sans-serif;
    font-size: 1.37em;
  }
  p {
    margin-top: 20px;
    font-size: 1.05em;
    text-align: left;
    font-family: 'Cairo', sans-serif;
  }
`

const ItemNav = styled.div`
  div {
    color: white;
  }
  div:hover {
    background-color: rgb(31, 31, 31) !important;
    transition: all 0.2s;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsData : undefined,
      isLoading: true,
      isError: false
    }
    this.aniStyle = 1
    this.readyToLeave = true
    this.getDetails = this.getDetails.bind(this)
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = '15px'
    this.getDetails(this.props.id)
  }
  componentWillUnmount() {
    document.body.style.overflow = 'initial'
    document.body.style.marginRight = '0'
  }
  getDetails(itemId) {
    portfolioItemDetails(itemId)
      .then(res => {
        this.setState({isLoading: false, detailsData: res})
      })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({isLoading: true, detailsData: undefined})
      this.getDetails(nextProps.id)
    }
  }
  render() {
    return (
      <Container
        style={this.props.style}
        onClick={e => this.readyToLeave && this.props.itemDetailsHandler()}
      >
        <Centered>
          {this.state.isLoading === false &&
              <Motion
                defaultStyle={{t: -50, o: 0}}
                style={{
                  t: this.aniStyle === 1
                  ? spring(0,{stiffness: 200, damping: 15})
                  : spring(0),
                  o: spring(100)
                }}
              >
                {intStyle => {
                  return (
                    <Content
                      style={
                        this.aniStyle === 1
                          ? {top: intStyle.t.toString() + 'px', opacity: intStyle.o/100}
                          : this.aniStyle === 2
                          ? {right: intStyle.t.toString() + 'px', opacity: intStyle.o/100}
                          : {left: intStyle.t.toString() + 'px', opacity: intStyle.o/100}
                      }
                    >
                      <div
                        className='container'
                        style={{backgroundColor: 'white'}}
                        onMouseLeave={e => e.buttons !== 1 && (() => this.readyToLeave = true)()}
                        onMouseEnter={e => this.readyToLeave = false}
                        onClick={event => event.stopPropagation()}
                      >
                        <div className='row'>
                          <div className='col-md-6' style={{padding: '0'}}>
                            <ImgSlider
                              images={this.state.detailsData.images}
                            />
                          </div>
                          <div className='col-md-6' style={{padding: '50px'}}>
                            <h3>{this.state.detailsData.title}</h3>
                            <hr/>
                            <p>{this.state.detailsData.content}</p>
                          </div>
                        </div>
                        <ItemNav
                          className='row'
                          style={{
                            fontSize: '15px',
                            letterSpacing: '4px'
                          }}
                        >
                          <div
                            style={{
                              padding: '10px 0',
                              backgroundColor: 'rgb(0, 153, 255)'
                            }}
                            className='col-xs-6'
                            onClick={(e) => {
                              this.aniStyle = 3
                              this.props.itemDetailsPrev(this.props.sort)
                            }}
                          >PREV</div>
                          <div
                            style={{
                              padding: '10px 0',
                              backgroundColor: 'rgb(0, 153, 255)'
                            }}
                            className='col-xs-6'
                            onClick={(e) => {
                              this.aniStyle = 2
                              this.props.itemDetailsNext(this.props.sort)
                            }}
                          >NEXT</div>
                        </ItemNav>
                      </div>
                    </Content>
                  )
                }}
              </Motion>
          }
        </Centered>
      </Container>
    )
  }
}
