import React from 'react'
import api from '../../api'
import styled from 'styled-components'
import ImageGallery from './ImageGallery'

const Gallery = (props) => {
  return (
    <div>
      {props.items.map(i => {
        return (
          <div key={i.id}>
            <div dangerouslySetInnerHTML={{ __html: i.content }}></div>
            <div dangerouslySetInnerHTML={{ __html: i.images.data[0].url }}></div>
          </div>
        )
      })}
    </div>
  )
}

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
