import React from 'react'
import api from '../../api'

class HomePage extends React.Component {
  state = {
    api: 'api should be here'
  }
  constructor(props) {
    super(props)
    api.then(res => this.setState({ api: res.data.content }))
  }
  render() {
    return (
      <div>
        <p>This is HomePage</p>
        <p dangerouslySetInnerHTML={{ __html: this.state.api }}></p>
      </div>
    )
  }
}

export default HomePage
