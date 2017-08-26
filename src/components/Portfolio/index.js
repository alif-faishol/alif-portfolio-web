import React from 'react'
import {portfolioThumbnail} from '../../api'
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
      itemDetails: {status: false, id: undefined, sort: undefined},
      page: parseInt(props.location.hash.match(/\d+/),10) || 1
    }
    this.getItems = this.getItems.bind(this)
    this.itemDetailsHandler = this.itemDetailsHandler.bind(this)
    this.itemDetailsNext = this.itemDetailsNext.bind(this)
    this.itemDetailsPrev = this.itemDetailsPrev.bind(this)
  }
  componentDidMount() {
    this.getItems()
  }
  getItems(page=this.state.page,limit=6) {
    return portfolioThumbnail({page,limit})
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
      page: parseInt(nextProps.location.hash.match(/\d+/),10) || 1
    })
    this.getItems(parseInt(nextProps.location.hash.match(/\d+/),10)) 
  }
  itemDetailsHandler(sort) {
    const id = Number.isInteger(sort) ? this.state.items[sort].id : 1
    if (this.state.itemDetails.status === false) {
      this.setState({itemDetails: {status: true, id: id, sort: sort}})
    } else {
      this.setState({itemDetails: {status: false, id: undefined, sort: undefined}})
    }
  }
  itemDetailsPrev(sort) {
    if (sort !== 0) {
      let prevItem = sort-1
      this.setState({
        itemDetails: {
          status: true,
          id: this.state.items[prevItem].id,
          sort: prevItem
        }
      })
    } else {
      let prevPage = this.state.page !== 1
        ? this.state.page-1
        : this.state.page
      this.setState({
        items: [],
        page: prevPage
      })
      this.getItems(prevPage).then(res => this.itemDetailsPrev(this.state.items.length)) 
    }
  }
  itemDetailsNext(sort) {
    if (this.state.items.length-1 > sort) {
      let nextItem = sort+1
      this.setState({
        itemDetails: {
          status: true,
          id: this.state.items[nextItem].id,
          sort: nextItem
        }
      })
    } else {
      let nextPage = this.state.totalPages > this.state.page
        ? this.state.page+1
        : this.state.page
      this.setState({
        items: [],
        page: nextPage
      })
      this.getItems(nextPage).then(res => this.itemDetailsNext(-1)) 
    }
  }
  render() {
    return (
      <div>
        {this.state.redirect &&
            <Redirect to='/portfolio'/>
        }
        {this.state.itemDetails.status &&
            <ItemDetails
              itemDetailsHandler={this.itemDetailsHandler}
              itemDetailsNext={this.itemDetailsNext}
              itemDetailsPrev={this.itemDetailsPrev}
              id={this.state.itemDetails.id}
              sort={this.state.itemDetails.sort}
            />
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
