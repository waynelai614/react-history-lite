import React from 'react'
import {
  compose, withHandlers, pure
} from 'recompose'

import { HistoryContext, withLocation } from 'components/history'
import { doSearch } from './utils'

const Page = () => {
  return (
    <section>
      <h2>Page Component</h2>
      <button
        type="button"
        onClick={() => doSearch({ keyword: 'iPhone' })}
      >
        Search iPhone
      </button>
      <button
        type="button"
        onClick={() => doSearch({ keyword: 'Android' })}
      >
        Search Android
      </button>
      <h3>History Object</h3>
      <HistoryContext.Consumer>
        {historyCtx => <p>{JSON.stringify(historyCtx.history)}</p>}
      </HistoryContext.Consumer>
    </section>
  )
}

const enhance = compose(
  withHandlers({
    handleLocationChange: () => ({ params }) => {
      // do some side effect ex: dispatch redux action, scroll event, etc.
      console.log('handleLocationChange', params) // eslint-disable-line no-console
    }
  }),
  withLocation(({ handleLocationChange }) => ({
    onChange: handleLocationChange
  })),
  pure,
)

export default enhance(Page)
