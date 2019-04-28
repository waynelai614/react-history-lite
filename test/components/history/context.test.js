import React from 'react'
import enzyme from 'enzyme'
import sinon from 'sinon'
import renderer from 'react-test-renderer'

import HistoryContext from 'components/history/context'
import { DummyComponent } from '../dummyComponent'

describe('<HistoryContext.Provider />', () => {
  const setup = (options = {}) => {
    const { history, method = 'mount' } = options
    return (
      enzyme[method](
        <HistoryContext.Provider history={history}>
          <DummyComponent />
        </HistoryContext.Provider>
      )
    )
  }

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('constructor', () => {
    it('should call `$history.listen and set instances correctly` ', () => {
      const listenSpy = jest.fn()
      const mockHistory = {
        listen: listenSpy
      }

      const wrapper = setup({
        history: mockHistory,
        method: 'shallow'
      })

      expect(
        wrapper.instance()._isMounted
      ).toBe(false)
      expect(
        wrapper.instance()._pendingLocation
      ).toBe(null)
      expect(listenSpy).toHaveBeenCalled()
    })
  })

  describe('componentDidMount', () => {
    it('should change `this._isMounted` value to `true`', () => {
      const wrapper = setup()

      expect(
        wrapper.instance()._isMounted
      ).toBe(true)
    })

    it('should call `handleLocationChange` if `_pendingLocation` is exists', () => {
      const handleChangeSpy = jest.spyOn(HistoryContext.Provider.prototype, 'handleLocationChange')
      const wrapper = setup({ method: 'shallow' })
      const mockLocation = {
        pathname: '/test',
        search: '?a=1&b=2',
        hash: ''
      }
      wrapper.instance()._pendingLocation = mockLocation
      wrapper.instance().componentDidMount()

      expect(handleChangeSpy).toHaveBeenCalledWith(mockLocation)
    })

    it('should not call `handleLocationChange` if `_pendingLocation` is null', () => {
      const handleChangeSpy = jest.spyOn(HistoryContext.Provider.prototype, 'handleLocationChange')
      const wrapper = setup({ method: 'shallow' })

      wrapper.instance().componentDidMount()

      expect(handleChangeSpy).not.toHaveBeenCalled()
    })
  })

  describe('componentWillUnmount', () => {
    it('should call `unlisten`', () => {
      const unlistenSpy = jest.fn()
      const wrapper = setup()

      wrapper.instance().unlisten = unlistenSpy
      wrapper.unmount()

      expect(unlistenSpy).toHaveBeenCalled()
    })
  })

  describe('getHistoryContext', () => {
    it('should return correct object', () => {
      const mockHistory = {
        listen: sinon.stub(),
        location: {}
      }
      const wrapper = setup({ history: mockHistory })

      expect(
        wrapper.instance().getHistoryContext()
      ).toEqual({
        history: mockHistory,
        location: mockHistory.location,
      })
    })
  })

  describe('handleLocationChange', () => {
    it('should update state correctly', () => {
      const wrapper = setup()
      const handleLocationChange = wrapper.instance().handleLocationChange
      const mockLocation = {
        pathname: '/test',
        search: '?a=1&b=2',
        hash: ''
      }

      handleLocationChange(mockLocation)

      expect(
        wrapper.instance().state
      ).toEqual({
        location: mockLocation,
      })
    })
  })

  describe('render', () => {
    it('should match snapshot', () => {
      const renderHistoryProvider = renderer.create(
        <HistoryContext.Provider>
          <DummyComponent />
        </HistoryContext.Provider>
      )

      expect(renderHistoryProvider).toMatchSnapshot()
    })
  })
})
