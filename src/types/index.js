import PropTypes from 'prop-types'

export const HistoryContextShape = PropTypes.shape({
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
})
