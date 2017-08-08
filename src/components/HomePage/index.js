import React from 'react'
import api, {apiRoot} from '../../api'

class HomePage extends React.Component {
  state = {
    api: 'api should be here'
  }
  constructor(props) {
    super(props)
    api('tables/portfolio/rows/1')
      .then(res => this.setState({ api: res.data.images.data[0].url }))
      .catch(err => this.setState({ api: err }))
  }
  render() {
    return (
      <div className='container-fluid' style={{ textAlign: 'center'}} >
        <p>This is HomePage</p>
        {/*<div dangerouslySetInnerHTML={{ __html: this.state.api }}></div>*/}
        <img style={{width: '100%'}} src={apiRoot + this.state.api} alt='' />
      </div>
    )
  }
}

export default HomePage
