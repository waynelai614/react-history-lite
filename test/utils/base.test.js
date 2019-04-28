import { getUrlParams } from 'utils/base'

describe('getUrlParams', () => {
  it('should return correct url params', () => {
    expect(
      getUrlParams('')
    ).toEqual({})

    expect(
      getUrlParams('?a=1&b=2')
    ).toEqual({
      a: '1',
      b: '2'
    })

    expect(
      getUrlParams('?a=1&b=&c')
    ).toEqual({
      a: '1',
      b: '',
      c: ''
    })
  })
})
