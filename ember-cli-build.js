/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    hinting: false,
  });

  return app.toTree();
};
