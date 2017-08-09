import React from 'react'
import api from '../../api'
import ImageGallery from './ImageGallery'
import PageTitle from '../common/PageTitle'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    api.portfolioThumbnail()
      .then(res => this.setState({items: res}))
  }
  render() {
    return (
      <div>
        <PageTitle title='Portfolio' />
        <ImageGallery items={this.state.items} /> 
      </div>
    )
  }
}

export default Portfolio
