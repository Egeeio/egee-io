/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = (defaults) => {
  var app = new EmberApp(defaults, {
    'ember-cli-qunit': {
      useLintTree: false
    }
  })

  return app.toTree()
}
