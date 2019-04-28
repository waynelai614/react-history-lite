import React from 'react'
import { mount } from 'enzyme'

import { Location, defaultParamsSelector } from 'components/history/location'
import { DummyComponent } from '../dummyComponent'

describe('<Location />', () => {
  const mockHistoryCtx = {
    history: {},
    location: {
      pathname: '/',
      search: '',
      hash: ''
    }
  }
  const mockParams = { a: 1, b: 2 }

  const setup = ({ onChange, paramsSelector } = {}) => mount(
    <Location
      historyCtx={mockHistoryCtx}
      onChange={onChange}
      paramsSelector={paramsSelector}
    >
      <DummyComponent />
    </Location>
  )

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('defaultProps', () => {
    it('should set defaultProps paramsSelector correctly', () => {
      const onChangeSpy = jest.fn()
      const wrapper = setup({ onChange: onChangeSpy })

      expect(
        wrapper.find(Location).prop('paramsSelector')
      ).toBe(defaultParamsSelector)
    })
  })

  describe('componentDidUpdate', () => {
    it('should call `props.onChange`', () => {
      const onChangeSpy = jest.fn()
      const paramsSelectorSpy = jest.fn().mockReturnValue(mockParams)
      const wrapper = setup({
        onChange: onChangeSpy,
        paramsSelector: paramsSelectorSpy
      })
      const nextProps = {
        historyCtx: {
          history: mockHistoryCtx.history,
          location: {
            ...mockHistoryCtx.location,
            pathname: '/test',
            search: '?a=1&b=2'
          }
        }
      }

      wrapper.setProps(nextProps)

      expect(
        paramsSelectorSpy
      ).toHaveBeenCalledWith(nextProps.historyCtx.location)
      expect(
        onChangeSpy
      ).toHaveBeenCalledWith({
        location: nextProps.historyCtx.location,
        params: mockParams
      })
    })
  })
})
