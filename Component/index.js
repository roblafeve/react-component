import React, { PureComponent, PropTypes } from 'react'

const ComponentName = 'NavSettings'

export default class Component extends PureComponent {
  render() {
    return <div>{ComponentName}</div>
  }
}

Component.displayName = ComponentName
Component.propTypes   = {
  children: PropTypes.any
}
