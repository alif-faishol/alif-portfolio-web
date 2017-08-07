import React from 'react'
import api from '../../api'

class HomePage extends React.Component {
  state = {
    api: 'api should be here'
  }
  constructor(props) {
    super(props)
    api('tables/portfolio/rows/1')
      .then(res => this.setState({ api: res.data.data.content }))
      .catch(err => this.setState({ api: err }))
  }
  render() {
    return (
      <div className='container-fluid' style={{ textAlign: 'center'}} >
        <p>This is HomePage</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.api }}></div>
      </div>
    )
  }
}

export default HomePage
