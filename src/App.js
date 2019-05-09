import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import styled from 'styled-components'
import { GlobalStyles } from './styles'
import { PageWrapper, Gutter } from './styles/generic'

import List from './List'

export const DataContext = React.createContext([])

function App() {
  const [listData, setListData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('./data.json')
      setListData(result.data)
    }
    fetchData()
  }, [])
  return (
    <PageWrapper>
      <DataContext.Provider value={listData}>
      <GlobalStyles />
      <Gutter>
        <h1>Hello World</h1>
        <List />
      </Gutter>
      </DataContext.Provider>
    </PageWrapper>
  )
}

export default App
