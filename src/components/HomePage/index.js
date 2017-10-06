import React from 'react'
import PageTitle from '../common/styling/PageTitle'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    api: 'api should be here'
  }
  render() {
    return (
      <div>
        <PageTitle title='Homepage' />
        <Link to='portfolio' style={{fontSize: '25px'}}>Go to porfolio</Link>
      </div>
    )
  }
}

export default HomePage
