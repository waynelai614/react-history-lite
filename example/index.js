import React from 'react'
import ReactDOM from 'react-dom'

import { HistoryContext } from 'components/history'
import SearchBox from './searchBox'
import Page from './page'

import './style.scss'

const App = () => (
  <HistoryContext.Provider>
    <h1>React History Lite Demo</h1>
    <SearchBox />
    <Page />
  </HistoryContext.Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
