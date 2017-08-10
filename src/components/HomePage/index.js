import React from 'react'
import PageTitle from '../common/styling/PageTitle'

class HomePage extends React.Component {
  state = {
    api: 'api should be here'
  }
  render() {
    return (
      <div>
        <PageTitle title='Homepage' />
        {/*<div dangerouslySetInnerHTML={{ __html: this.state.api }}></div>*/}
      </div>
    )
  }
}

export default HomePage
