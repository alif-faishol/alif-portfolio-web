import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const styles = {
  link: {
    display: 'block',
    textAlign: 'center',
    height: '50px'
  }
}

const Container = styled.div`
  position: absolute;
  top: 25px;
  left: -80px;
  background-color: white;
  color: blue;
  width: 80px;
  z-index: 0;
  box-shadow: -4px 3px 8px rgba(171, 171, 171, 0.5);
  @media (max-width: 900px) {
    background-color: red;
  }
`

export default () => {
  return (
    <Container>
      <div>
        <Link to='/' style={styles.link}>Home</Link>
      </div>
    </Container>
  )
}
