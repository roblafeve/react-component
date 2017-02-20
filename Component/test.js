import React from 'react'
import Component from '.'
import { shallow } from 'enzyme'

describe(Component.displayName, () => {
  const wrapper = shallow(<Component />)

  it('renders', () => {
    expect(wrapper.length).toBe(1)
  })

})
