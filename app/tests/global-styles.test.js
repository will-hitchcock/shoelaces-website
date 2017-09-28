import { globalStyles } from '../global-styles'

describe('globalStyles', () => {
  it('rendrs global styles', () => {
    expect(globalStyles).toMatchSnapshot()
  })
})
