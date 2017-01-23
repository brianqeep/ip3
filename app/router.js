import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('message-board');
  this.route('about');
  this.route('contact');
  this.route('message');
});

export default Router;
