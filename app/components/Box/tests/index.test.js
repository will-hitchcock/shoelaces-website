import React from 'react'
import Button from '../index'
import css from '../css'

describe('container', () => {
  it('renders a <Box />', () => {
    expect(shallow(<Button path="some/path" />)).toMatchSnapshot()
  })

  it('renders css', () => {
    expect(css).toMatchSnapshot()
  })
})
