import React from 'react'
import { shallow } from 'enzyme'

import withLocation from 'components/history/withLocation'
import Location from 'components/history/location'
import { DummyComponent } from '../dummyComponent'

describe('withLocation', () => {
  const setup = ({ handleOnChange }) => {
    const Component = withLocation(() => ({
      onChange: handleOnChange
    }))(DummyComponent)

    return shallow(<Component />)
  }

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render <Location /> correctly', () => {
    const handleOnChangeSpy = jest.fn()
    const wrapper = setup({ handleOnChange: handleOnChangeSpy })

    expect(wrapper.find(Location).prop('onChange')).toBe(handleOnChangeSpy)
    expect(wrapper.find(DummyComponent).exists()).toBe(true)
  })
})
