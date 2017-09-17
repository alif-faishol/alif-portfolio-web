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
      data: {
        items: [],
        itemPerPage: window.innerHeight >= 800 ? 6 : 3,
        totalPages: 1,
        displayedItems: []
      },
      error: false,
      redirect: false,
      page: parseInt(props.location.hash.match(/\d+/),10) || 1,
      itemDetails: {status: false, id: undefined, sort: undefined},
    }
    this.getItems = this.getItems.bind(this)
    this.itemDetailsHandler = this.itemDetailsHandler.bind(this)
    this.itemDetailsNext = this.itemDetailsNext.bind(this)
    this.itemDetailsPrev = this.itemDetailsPrev.bind(this)
    this.resized = this.resized.bind(this)
  }
  getItems() {
    return portfolioThumbnail()
      .then(res => {
        let totalPages = Math.ceil(res.length/this.state.data.itemPerPage)
        Array.isArray(res)
          ? this.setState({
            page: this.state.page < totalPages ? this.state.page : totalPages,
            data: Object.assign({}, this.state.data, {
              items: res,
              totalPages: totalPages
            })
          })
          : this.setState({error: true})
      })
      .catch(err => this.setState({error: true}))
  }
  itemDetailsHandler(sort) {
    const id = this.state.data.items[sort ? sort : 0].id
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
          id: this.state.data.items[prevItem].id,
          sort: prevItem
        }
      })
    } else {
      let prevPage = this.state.page !== 1
        ? this.state.page-1
        : this.state.page
      this.setState({
        data: {
          items: []
        },
        page: prevPage
      })
      this.getItems(prevPage).then(res => this.itemDetailsPrev(this.state.data.items.length)) 
    }
  }
  itemDetailsNext(sort) {
    if (this.state.data.items.length-1 > sort) {
      let nextItem = sort+1
      this.setState({
        itemDetails: {
          status: true,
          id: this.state.data.items[nextItem].id,
          sort: nextItem
        }
      })
    } else {
      let nextPage = this.state.totalPages > this.state.page
        ? this.state.page+1
        : this.state.page
      this.setState({
        data: {
          items: []
        },
        page: nextPage
      })
      this.getItems(nextPage).then(res => this.itemDetailsNext(-1)) 
    }
  }
  resized() {
    let totalPages = Math.ceil(this.state.data.items.length/this.state.data.itemPerPage)
    return ((window.innerHeight >= 800 && this.state.data.itemPerPage !== 6) || (window.innerHeight < 800 && this.state.data.itemPerPage !== 3))
      && (this.setState({
        page: this.state.page < totalPages ? this.state.page : totalPages,
        data: Object.assign({}, this.state.data, {
          totalPages: Math.ceil(this.state.data.items.length/(window.innerHeight > 800 ? 6 : 3)),
          itemPerPage: window.innerHeight >= 800 ? 6 : 3
        })
      })
      )
  }
  componentDidMount() {
    this.getItems()
    window.addEventListener('resize', this.resized)
  }
  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      page: parseInt(nextProps.location.hash.match(/\d+/),10) || 1
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resized)
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
          items={
            (() => {
              let start = (this.state.page-1)*this.state.data.itemPerPage,
                end = (this.state.page-1)*this.state.data.itemPerPage + this.state.data.itemPerPage
              return this.state.data.items.slice(start, end)
            })()
          }
          error={this.state.error}
          itemDetailsHandler={this.itemDetailsHandler}
        /> 
        <Paginator
          pages={this.state.data.totalPages}
          baseUrl='/portfolio/#page-'
          active={this.state.page}
        />
      </div>
    )
  }
}

export default Portfolio
