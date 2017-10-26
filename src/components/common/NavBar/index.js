import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  @media (min-width: 768px) {
    top: 50px;
    width: 50px;
    box-shadow: 0 2px 10px #999999;
  }
  background-color: #1a1a1a;
`

const Menu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  height: 50px;
  width: inherit;
  background-color: white;
  white-space: nowrap;
  border-bottom: 1px solid #1a1a1a;
  &>div {
    display: inline-block;
    height: 50px;
    width: 50px;
  }
  &>div.icon {
  }
  & span {
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  componentWillReceiveProps() {
    this.setState({showNav: false})
  }
  toggleNav() {
    this.state.showNav ?
      this.setState({showNav: false}) :
      this.setState({showNav: true})
  }
  render() {
    return (
      <Container>
        <Menu
          onClick={this.toggleNav}
        >
          <div className='icon'>
            <span className={'typcn typcn-th-menu'}></span>
          </div>
          <div>
            <span style={{marginLeft: '25px'}}>Menu</span>
          </div>
        </Menu>
        <Item
          exact
          to='/'
          icon='home'
          value='Homepage'
          data={{showNav:this.state.showNav}}
        />
        <Item
          to='/portfolio'
          icon='star'
          value='Portfolio'
          data={{showNav:this.state.showNav}}
        />
        <Item
          to='/about'
          icon='info-large'
          value='About'
          data={{showNav:this.state.showNav}}
        />
      </Container>
    )
  }
}
