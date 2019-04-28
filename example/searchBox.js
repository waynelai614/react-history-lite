import React, { useState } from 'react'

import { Location } from 'components/history'
import { getUrlParams } from 'utils/base'
import { doSearch } from './utils'

const SearchBox = () => {
  const urlParams = getUrlParams()
  const [keyword, setKeyword] = useState(decodeURIComponent(urlParams.keyword || ''))

  const handleSubmit = e => {
    e.preventDefault()

    if (keyword.trim() !== '') {
      setKeyword(keyword)
      doSearch({ keyword })
    }
  }

  const handleInputChange = e => {
    setKeyword(e.target.value)
  }

  const handleLocationChange = ({ params }) => {
    setKeyword(decodeURIComponent(params.keyword || ''))
  }

  return (
    <section>
      <h2>Search Box Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-box"
          placeholder="Search something..."
          value={keyword}
          onChange={handleInputChange}
        />
        <button type="submit">Go!</button>
      </form>
      <Location onChange={handleLocationChange} />
    </section>
  )
}

export default SearchBox
