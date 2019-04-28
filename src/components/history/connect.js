import React from 'react'

import HistoryContext from './context'

/**
 * Connect any component to history context, and inject as a prop called `historyCtx`
 * @param {Component} - React Component
 */
export const connectHistory = Component => props => ( // eslint-disable-line react/display-name
  <HistoryContext.Consumer>
    {historyCtx => {
      if (process.env.NODE_ENV !== 'production' && !historyCtx) {
        console.error( // eslint-disable-line no-console
          'You should use <HistoryContext.Consumer> inside the <HistoryContext.Provider>'
        )
      }
      return (
        <Component {...props} historyCtx={historyCtx} />
      )
    }}
  </HistoryContext.Consumer>
)
