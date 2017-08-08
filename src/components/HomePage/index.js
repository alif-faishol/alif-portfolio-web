import React from 'react'

class HomePage extends React.Component {
  state = {
    api: 'api should be here'
  }
  render() {
    return (
      <div className='container-fluid' style={{ textAlign: 'center'}} >
        <p>This is HomePage</p>
        {/*<div dangerouslySetInnerHTML={{ __html: this.state.api }}></div>*/}
      </div>
    )
  }
}

export default HomePage
