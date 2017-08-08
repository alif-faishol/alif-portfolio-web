import React from 'react'
import api, {apiRoot} from '../../api'
import styled from 'styled-components'
import ImageGallery from './ImageGallery'

const Container = styled.div`

`

const Info = styled.div`

`
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
    items: [],
    img: ''
  }
  constructor(props) {
    super(props)
    api('tables/portfolio/rows')
      .then(res => {
        this.setState(prevState => ({
          items: prevState.items.concat(res.data)
        })
        )
      })
    api('tables/portfolio/rows')
      .then(res => {
        this.setState({img: res.data[1].images.data[0].url})
        console.log(this.state.img)
      })
  }
  render() {
    return (
      <Container>
        <Info></Info>
        <ImageGallery thumbnail={'https://directusapi.alifaishol-test.tk/' + this.state.img} items={this.state.items} />
      </Container>
    )
  }
}

export default Portfolio
