import Ember from 'ember';
import config from '../config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('minecraft');
  this.route('rust');
  this.route('gmod');
  this.route('terraria');
  this.route('not-found', { path: '/*path' });
});

export default Router;
