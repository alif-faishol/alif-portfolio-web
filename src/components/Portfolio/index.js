import React from 'react'
import api from '../../api'
import ImageGallery from './ImageGallery'
import PageTitle from '../common/styling/PageTitle'
import Paginator from '../common/Paginator'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      error: false,
      totalPages: 1,
      page: parseInt(props.match.params.page, 10) || 1
    }
    this.getItems = this.getItems.bind(this)
    this.getItems()
  }
  getItems(page=this.state.page,limit=6) {
    api.portfolioThumbnail({page,limit})
      .then(res => Array.isArray(res.data)
        ? this.setState({items: res.data, totalPages: res.meta.totalPages})
        : this.setState({error: true}))
      .catch(err => this.setState({error: true}))
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      items: [],
      page: parseInt(nextProps.match.params.page, 10) || 1
    })
    this.getItems(nextProps.match.params.page) 
  }
  render() {
    return (
      <div>
        <PageTitle title='Portfolio' />
        <ImageGallery
          items={this.state.items}
          error={this.state.error}
        /> 
        <Paginator
          pages={this.state.totalPages}
          baseUrl='/portfolio/page/'
          active={this.state.page}
        />
      </div>
    )
  }
}

export default Portfolio
