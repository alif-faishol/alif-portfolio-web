import React from 'react'
import api from '../../api'
import ImageGallery from './ImageGallery'

class Portfolio extends React.Component {
  state = {
    items: []
  }
  constructor(props) {
    super(props)
    api.portfolioThumbnail()
      .then(res => this.setState({items: res}))
  }
  render() {
    return (
      <div>
        <div></div>
        <ImageGallery items={this.state.items} /> 
      </div>
    )
  }
}

export default Portfolio
