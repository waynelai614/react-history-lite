import { $history } from 'utils/history'

export const doSearch = (params = {}) => {
  const { keyword } = params
  const searchUrl = `/?keyword=${keyword}`

  $history.push(searchUrl)
}
