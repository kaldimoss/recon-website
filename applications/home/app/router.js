import EmberRouter from '@ember/routing/router';
import config from 'home/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('panel');
  this.route('raju_ai');
  this.route('experiments');
});
