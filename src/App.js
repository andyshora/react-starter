import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import { GlobalStyles } from './styles'
import { PageWrapper, Gutter } from './styles/generic'

function App() {
  // const [str, setStr] = useState('')
  // useEffect(() => {}, [])
  return (
    <PageWrapper>
      <GlobalStyles />
      <Gutter>
        <h1>Hello World</h1>
      </Gutter>
    </PageWrapper>
  )
}

export default App
