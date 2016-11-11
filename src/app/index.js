import ng from 'angular';

import 'bootstrap/less/bootstrap.less';
import 'bootstrap/less/theme.less';
import 'roboto-font/css/fonts.css';
import 'angular-aria/angular-aria';
import 'angular-animate/angular-animate';
import 'angular-ui-bootstrap';
import 'font-awesome/less/font-awesome.less';
import 'textangular/dist/textAngular-sanitize';
import 'textangular/dist/textAngular.min';
import 'textangular/dist/textAngular.css';
import 'angular-smart-table';
import 'angular-moment';
import 'angular-ui-router/release/angular-ui-router';

import './components';
import './services';
import './routes';

export default ng.module('app', [
  'ui.bootstrap',
  'textAngular',
  'smart-table',
  // 'angular.moment',
  'ui.router',
  'app.components',
  'app.services',
  'app.routes',
]).config(['$httpProvider', function($httpProvider) {
  'ngInject';
  $httpProvider.defaults.withCredentials = true;
}]).name;
