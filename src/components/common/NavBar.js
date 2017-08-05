import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    position: 'absolute',
    top: '25px',
    left: '-80px',
    backgroundColor: 'white',
    color: 'blue',
    width: '80px',
    boxShadow: '0 0 15px rgba(171, 171, 171, 0.5)'
  },
  link: {
    display: 'block',
    textAlign: 'center',
    height: '50px'
  }
}

export default () => {
  return (
    <div style={styles.container} >
      <div>
        <Link to='/' style={styles.link}>Home</Link>
      </div>
    </div>
  )
}
