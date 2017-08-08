import React from 'react'
import api, {apiRoot} from '../../api'
import styled from 'styled-components'

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
    items: []
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
  }
  render() {
    return (
      <div>
        <Container>
          <Info></Info>
          <Gallery items={this.state.items} />
        </Container>
      </div>
    )
  }
}

export default Portfolio
