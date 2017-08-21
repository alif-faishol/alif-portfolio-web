import React from 'react'
import api from '../../api'
import ImageGallery from './ImageGallery'
import ItemDetails from './ImageGallery/ItemDetails'
import PageTitle from '../common/styling/PageTitle'
import Paginator from '../common/Paginator'
import {Helmet} from 'react-helmet'
import {Redirect} from 'react-router-dom'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      error: false,
      totalPages: 1,
      redirect: false,
      itemDetails: {status: false, data: undefined},
      page: props.location.hash.match(/\d+/) || 1
    }
    this.getItems = this.getItems.bind(this)
    this.itemDetailsHandler = this.itemDetailsHandler.bind(this)
    this.getItems()
  }
  getItems(page=this.state.page,limit=6) {
    api.portfolioThumbnail({page,limit})
      .then(res => {
        if (page > res.meta.totalPages) {
          this.setState({redirect: true})
        }
        Array.isArray(res.data)
          ? this.setState({items: res.data, totalPages: res.meta.totalPages})
          : this.setState({error: true})
      })
      .catch(err => this.setState({error: true}))
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      items: [],
      page: nextProps.location.hash.match(/\d+/) || 1
    })
    this.getItems(nextProps.location.hash.match(/\d+/)) 
  }
  itemDetailsHandler(data) {
    if (this.state.itemDetails.status === false) {
      this.setState({itemDetails: {status: true, data: data}})
    } else {
      this.setState({itemDetails: {status: false, data: undefined}})
    }
  }
  render() {
    return (
      <div>
        {this.state.redirect
            ? <Redirect to='/portfolio'/>
            : null
        }
        {this.state.itemDetails.status
            ? <ItemDetails itemDetailsHandler={this.itemDetailsHandler} data={this.state.itemDetails.data} />
            : null
        }
        <Helmet>
          <meta property="og:title" content="Portfolio Page of Alif's Website" />
          <meta property="og:description" content="Here lies some of Alif's works displayed as a portfolio." />
          <meta property="og:image" content="/../thumbnail.png" />
          <meta property="og:url" content="https://alif-faishol.github.io/portfolio" />
          <meta name="twitter:card" content="/thumbnail.png" />
          <meta property="og:site_name" content="Alif's Portfolio Website" />
          <meta name="twitter:image:alt" content="Logo of Alif Faishol" />
        </Helmet>
        <PageTitle title='Portfolio' />
        <ImageGallery
          items={this.state.items}
          error={this.state.error}
          itemDetailsHandler={this.itemDetailsHandler}
        /> 
        <Paginator
          pages={this.state.totalPages}
          baseUrl='/portfolio/#page-'
          active={parseInt(this.state.page,10)}
        />
      </div>
    )
  }
}

export default Portfolio
