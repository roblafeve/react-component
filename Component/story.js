import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Component from '.'

storiesOf(Component.displayName, module)
  .add('Default', () => (
    <Component />
  ))
