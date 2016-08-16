import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('servers/minecraft', { path: '/minecraft' });
  this.route('servers/rust', { path: '/rust' });
  this.route('servers/gmod', { path: '/gmod' });
  this.route('servers/terraria', { path: '/terraria' });
  this.route('bingo', { path: '/bingo' });
  this.route('not-found', { path: '/*path' });
});

export default Router;
