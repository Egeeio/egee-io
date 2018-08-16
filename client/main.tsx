import * as React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/app'

Meteor.startup(() => {
  render(<App />, document.getElementById('root'))
})
