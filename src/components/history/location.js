import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { HistoryContextShape } from 'types'
import { getUrlParams } from 'utils/base'
import { connectHistory } from './connect'

/**
 * @param {Object} historyCtx - <HistoryContext.Provider />'s context
 * @param {Function} paramsSelector - default `(location) => getUrlParams(location.search)`
 * selector function to extract params data from location,
 * and pass as second argument to `onChange()`
 *  e.g.
 *  ```js
 *  const paramsSelector = (location) => {
 *    const { pathname, search, hash } = location
 *    return {
 *      //...
 *    }
 *  }
 *  ```
 * @param {Function} onChange
 * callback function that allows you to do some side effect when location changes
 *  e.g.
 *  ```js
 *  const onChange: ({ location, params }) => {}
 *  ```
 * @param {Component} children - React Component
 */
export class Location extends PureComponent {
  static propTypes = {
    historyCtx: HistoryContextShape.isRequired,
    paramsSelector: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ])
  }

  static defaultProps = {
    paramsSelector: ({ search }) => getUrlParams(search),
  }

  componentDidUpdate(prevProps) {
    const {
      historyCtx: {
        location: prevLocation
      }
    } = prevProps
    const {
      historyCtx: {
        location,
      },
      paramsSelector,
      onChange,
    } = this.props

    if (prevLocation !== location) {
      onChange({
        location,
        params: paramsSelector(location),
      })
    }
  }

  render() {
    if (!this.props.children) return null

    return (
      React.Children.only(this.props.children)
    )
  }
}

export default connectHistory(Location)
