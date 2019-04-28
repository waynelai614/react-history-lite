/**
 * Return the url params
 *
 * @param {String} queryString - window.location.search
 * @return {Object} urlParams
 */
export const getUrlParams = (queryString = window.location.search) => {
  const queries = queryString.substring(1).split('&').filter(Boolean)

  return queries.reduce((params, query) => {
    const [k, v] = query.split('=')

    return {
      ...params,
      [k]: v || ''
    }
  }, {})
}
