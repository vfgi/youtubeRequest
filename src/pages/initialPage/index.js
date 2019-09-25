import React, { Component } from 'react'
import { Container } from './style'

import AppLogo from '../../assets/React.js_logo.png'

class InitialPage extends Component {
  state = {
    test: false
  }
  render() {
    return (
      <Container>
        <div className="new">
          <img src={AppLogo} alt="applogo" />
          <span> Hello World!</span>
          <img src={AppLogo} alt="applogo" />
        </div>
      </Container>
    )
  }
}

export default InitialPage
