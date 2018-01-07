import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('not-found', { path: '/*path' })
  this.route('servers');
})

export default Router
