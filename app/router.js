// This is the Ember router. If you want to add a new route for a server, follow the pattern below.
// Documentation for the Ember router can be found here - https://guides.emberjs.com/v2.5.0/routing/
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('servers/minetest', { path: '/minetest' });
  this.route('servers/quake', { path: '/quake' });
  this.route('servers/quake2', { path: '/quake2' });
  this.route('servers/zomboid', { path: '/zomboid' });
  this.route('servers/minecraft', { path: '/minecraft' });
  this.route('servers/rust', { path: '/rust' });
  this.route('servers/gmod', { path: '/gmod' });
  this.route('servers/terraria', { path: '/terraria' });
  this.route('bingo', { path: '/bingo' });
  this.route('not-found', { path: '/*path' });
});

export default Router;
