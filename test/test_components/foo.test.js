import React from 'react'
import renderer from 'react-test-renderer'

import Foo from 'components/foo'

describe('<Button>', () => {
  it('render component correctly', () => {
    const button = renderer.create(
      <Foo />
    )
    expect(button).toMatchSnapshot()
  })
})
