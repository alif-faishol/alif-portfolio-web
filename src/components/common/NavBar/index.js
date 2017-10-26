import React from 'react'
import Item from './Item'

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
      <div style={{width: '50px', backgroundColor: '#1a1a1a'}}>
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
      </div>
    )
  }
}
