import React, { Fragment, PureComponent } from 'react'
import { isFunction } from 'lodash'

import Location from './location'

/**
 * @param {Function} initializer - It take props as arguments and return an Object
 * and pass it as props to <Location {...props} />
 *
 * ex:
 * ```js
 * withLocation(props => ({
 *  onChange: () => {},
 *  paramsSelector: () => {},
 * }))(Base)
 * ```
 */
export default initializer => Base => {
  if (process.env.NODE_ENV !== 'production' && !isFunction(initializer)) {
    console.error( // eslint-disable-line no-console
      'withLocation(): Expected "Function" as an argument'
    )
  }

  return class WithLocation extends PureComponent {
    constructor(props) {
      super(props)

      this.locationCompProps = initializer(props)
    }

    render() {
      return (
        <Fragment>
          <Location {...this.locationCompProps} />
          <Base {...this.props} />
        </Fragment>
      )
    }
  }
}
