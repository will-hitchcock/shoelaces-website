import React from 'react'
import HomePage from '../index'

describe('<HomePage />', () => {
  it('renders the <HomePage />', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot()
  })
})
