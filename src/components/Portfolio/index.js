import React from 'react'
import {portfolioThumbnail} from '../../api'
import ImageGallery from './ImageGallery'
import ItemDetails from './ImageGallery/ItemDetails'
import Centered from '../common/styling/Centered'
import Paginator from '../common/Paginator'
import {Helmet} from 'react-helmet'
import {Redirect} from 'react-router-dom'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        items: [],
        displayedItems: []
      },
      totalPages: 1,
      error: false,
      redirect: false,
      itemPerPage: window.innerHeight >= 800 ? 6 : 3,
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
        let totalPages = Math.ceil(res.length/this.state.itemPerPage)
        Array.isArray(res)
          ? this.setState({
            page: this.state.page < totalPages ? this.state.page : totalPages,
            totalPages: totalPages,
            data: Object.assign({}, this.state.data, {
              items: res
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
    let totalPages = Math.ceil(this.state.data.items.length/this.state.itemPerPage)
    return ((window.innerHeight >= 800 && this.state.itemPerPage !== 6) || (window.innerHeight < 800 && this.state.itemPerPage !== 3))
      && (this.setState({
        page: this.state.page < totalPages ? this.state.page : totalPages,
        itemPerPage: window.innerHeight >= 800 ? 6 : 3,
        totalPages: Math.ceil(this.state.data.items.length/(window.innerHeight > 800 ? 6 : 3))
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
        <Helmet>
          <meta property="og:title" content="Portfolio Page of Alif's Website" />
          <meta property="og:description" content="Here lies some of Alif's works displayed as a portfolio." />
          <meta property="og:image" content="/../thumbnail.png" />
          <meta property="og:url" content="https://alif-faishol.github.io/portfolio" />
          <meta name="twitter:card" content="/thumbnail.png" />
          <meta property="og:site_name" content="Alif's Portfolio Website" />
          <meta name="twitter:image:alt" content="Logo of Alif Faishol" />
        </Helmet>
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
        <div style={{marginBottom: '20px', marginTop: '30px'}} className="row">
          <div className="col-sm-6">
            <span style={{fontSize: '30px'}}>Portfolio</span>
          </div>
          <Paginator
            className="col-sm-6"
            pages={this.state.totalPages}
            baseUrl='/portfolio/#page-'
            active={this.state.page}
          />
        </div>
        <Centered style={{display: 'block', width: '100%'}}>
          <div style={{verticalAlign: 'initial', textAlign: 'initial'}} >
            <ImageGallery
              currentPage={this.state.page}
              itemPerPage={this.state.itemPerPage}
              items={
                (() => {
                  let start = (this.state.page-1)*this.state.itemPerPage,
                    end = (this.state.page-1)*this.state.itemPerPage + this.state.itemPerPage
                  return this.state.data.items.slice(start, end)
                })()
              }
              error={this.state.error}
              itemDetailsHandler={this.itemDetailsHandler}
            /> 
          </div>
        </Centered>
      </div>
    )
  }
}

export default Portfolio
