import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'

import { Wrapper, Content } from './styles/components'

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Content>
          <GlobalStyle />
          <Routes />
        </Content>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
