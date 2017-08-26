import React from 'react'
import styled from 'styled-components'
import {Motion, spring} from 'react-motion'
import {portfolioItemDetails} from '../../../../api'
import ImgSlider from './ImgSlider'

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

const ContentContainer = styled.div`
  text-align: center;
  height: 100%;
  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`

const Content = styled.div`
  padding: 50px 0;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  font-size: 1.2em;
  overflow: hidden;
  @media (max-width: 500px) {
    background-color: white;
    width: 100%;
  }
  div.container {
    @media (max-width: 991px) {
      max-width: 500px;
    }
  }
  h3 {
    margin-top: 0;
    text-align: left;
    font-family: 'Cairo', sans-serif;
    font-size: 1.3em;
  }
  p {
    margin-top: 20px;
    text-align: left;
    font-family: 'Cairo', sans-serif;
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
    this.getDetails = this.getDetails.bind(this)
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden'
    this.getDetails(this.props.id)
  }
  componentWillUnmount() {
    document.body.style.overflow = 'initial'
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
      <Container style={this.props.style} onClick={this.props.itemDetailsHandler}>
        <ContentContainer>
          {this.state.isLoading
              ? null
              :
              <Motion
                defaultStyle={{t: -50}}
                style={{t: spring(0,{stiffness: 300, damping: 15})}}
              >
                {intStyle => {
                  return (
                    <Content
                      style={{top: intStyle.t.toString() + 'px'}}
                      onClick={event => event.stopPropagation()}
                    >
                      <div className='container' style={{backgroundColor: 'white'}}>
                        <div className='row'>
                          <div className='col-md-6' style={{padding: '0'}}>
                            <ImgSlider images={this.state.detailsData.images}></ImgSlider>
                            {this.state.detailsData.images.map(item => {
                              return (<img key={item.id} src={item.url} alt="Big" width='100%'/>)
                            })}
                          </div>
                          <div className='col-md-6' style={{padding: '50px'}}>
                            <h3>{this.state.detailsData.title}</h3>
                            <hr/>
                            <p>{this.state.detailsData.content}</p>
                            <a
                              onClick={(e) => {
                                this.props.itemDetailsPrev(this.props.sort)
                              }}
                            >prev</a>
                            <a
                              onClick={(e) => {
                                this.props.itemDetailsNext(this.props.sort)
                              }}
                            >next</a>
                          </div>
                        </div>
                      </div>
                    </Content>
                  )
                }}
              </Motion>
          }
        </ContentContainer>
      </Container>
    )
  }
}
