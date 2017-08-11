import React from 'react'
import styled from 'styled-components'
import Item from './Item'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  toggleNav() {
    this.state.showNav ?
      this.setState({showNav: false}) :
      this.setState({showNav: true})
  }
  render() {
    const Container = styled.div`
      @media (max-width: 991px) {
        position: fixed;
        display: ${this.state.showNav ? 'block' : 'none'};
        left: 20px;
        top: 20px;
        background-color: #242c36;
      }
    `
    const ItemContainer = styled.nav`
      position: relative;
      background-color: #242c36;
      width: 50px;
      box-shadow: unset;
      @media (min-width: 992px) {
        top: 20px;
        left: -50px;
        box-shadow: -4px 3px 8px rgba(171, 171, 171, 0.5);
      }
    `
    const Menu = styled.div`
      @media (min-width: 992px) {
        display: none;
      }
      position: fixed;
      top: 20px;
      left: 20px;
      height: 50px;
      width: 50px;
      background-color: white;
      border: 1px solid #cccccc;
      span {
        margin: 0;
        position: absolute;
        font-size: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-right: -50%;
      }
    `
    const CloseNav = styled.div`
      @media (min-width: 992px) {
        display: none;
      }
      position: relative;
      height: 50px;
      width: 50px;
      font-family: 'Cairo', sans-serif;
      font-weight: 200;
      font-size: 25px;
      border-bottom: 2px solid white;
      color: white;
      span {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-right: -50%;
      }
      div {
        display: table-cell;
        border-bottom: 2px solid white;
        vertical-align: middle;
        position: relative;
        height: 50px;
        padding: 0 20px;
        background-color: #242c36;
        left: 50px;
        p {
          margin: 0;
          font-size: 20px;
          display: block;
          width: 150px
        }
      }
    `
    return (
      <div>
        <Menu onClick={this.toggleNav}>
          <span className='typcn typcn-th-menu'></span>
        </Menu>
        <Container>
          <ItemContainer>
            <CloseNav onClick={this.toggleNav}>
              <span className='typcn typcn-arrow-sorted-up'></span>
              <div><p>Close</p></div>
            </CloseNav>
            <Item
              exact
              to='/'
              icon='home'
              value='Homepage'
            />
            <Item
              to='/portfolio'
              icon='star'
              value='Portfolio'
            />
            <Item
              to='/about'
              icon='info-large'
              value='About'
            />
          </ItemContainer>
        </Container>
      </div>
    )
  }
}
