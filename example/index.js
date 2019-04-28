import React from 'react'
import ReactDOM from 'react-dom'

import { HistoryContext } from 'components/history'
import SearchBox from './searchBox'
import Page from './page'

import './style.scss'

const SearchBoxApp = () => (
  <HistoryContext.Provider>
    <SearchBox />
  </HistoryContext.Provider>
)

const PageApp = () => (
  <HistoryContext.Provider>
    <Page />
  </HistoryContext.Provider>
)

ReactDOM.render(
  <SearchBoxApp />,
  document.getElementById('search-box')
)

ReactDOM.render(
  <PageApp />,
  document.getElementById('page')
)
