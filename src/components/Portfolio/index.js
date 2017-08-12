import React from 'react'
import api from '../../api'
import ImageGallery from './ImageGallery'
import PageTitle from '../common/styling/PageTitle'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      error: false
    }
    api.portfolioThumbnail()
      .then(res => this.setState({items: res}))
      .catch(err => this.setState({error: true}))
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
