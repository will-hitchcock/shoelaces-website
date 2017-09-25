import React from 'react'
import BasicExample from '../index'

describe('<BasicExample />', () => {
  it('renders a <BasicExample />', () => {
    expect(shallow(<BasicExample />)).toMatchSnapshot()
  })
})
