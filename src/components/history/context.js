import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindAll } from 'lodash'

import { $history } from 'utils/history'

const HistoryContext = React.createContext()

class HistoryProvider extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
  }

  constructor(props) {
    super(props)

    bindAll(this, [
      'getHistoryContext',
      'handleLocationChange',
    ])

    this.history = props.history || $history

    this.state = {
      location: this.history.location,
    }

    /**
     * This is a bit of a hack. We have to start listening for location changes
     * here in the `constructor` but not in `componentDidMount` in case there are
     * any history push/replace calls before the <HistoryProvider />'s `componentDidMount`.
     *
     * e.g
     * ```jsx
     *  <Provider>
     *    <Child />
     *  </Provider>
     * ```
     * Provider#constructor => Child#constructor
     *   => Child#componentDidMount => Provider#componentDidMount
     *
     * ref:
     * https://github.com/ReactTraining/react-router/blob/v5.0.0/packages/react-router/modules/Router.js#L22-L47
     */
    this._isMounted = false
    this._pendingLocation = null

    this.unlisten = this.history.listen(location => {
      if (this._isMounted) {
        this.handleLocationChange(location)
      } else {
        this._pendingLocation = location
      }
    })
  }

  componentDidMount() {
    this._isMounted = true

    if (this._pendingLocation) {
      this.handleLocationChange(this._pendingLocation)
    }
  }

  componentWillUnmount() {
    if (this.unlisten) this.unlisten()
  }

  getHistoryContext() {
    return {
      history: this.history,
      ...this.state,
    }
  }

  handleLocationChange(location) {
    this.setState({ location })
  }

  render() {
    return (
      <HistoryContext.Provider value={this.getHistoryContext()}>
        {this.props.children}
      </HistoryContext.Provider>
    )
  }
}

export default {
  Provider: HistoryProvider,
  Consumer: HistoryContext.Consumer
}
