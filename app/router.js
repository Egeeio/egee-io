import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('servers');
  this.route('faq');
  this.route('distros');
  this.route('contributors');
});

export default Router;
