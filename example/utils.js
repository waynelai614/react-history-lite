import { $history } from 'utils/history'

export const doSearch = (params = {}, $window = window) => {
  const {
    location: { pathname }
  } = $window
  const { keyword } = params
  const searchUrl = `${pathname}?keyword=${keyword}`

  $history.push(searchUrl)
}
