import ng from 'angular';

import 'bootstrap/less/bootstrap.less';
import 'bootstrap/less/theme.less';
import 'roboto-font/css/fonts.css'
import 'angular-aria/angular-aria.js';
import 'angular-animate/angular-animate.js';
import 'angular-ui-bootstrap';
import 'font-awesome/less/font-awesome.less';
import 'textangular/dist/textAngular-sanitize.js';
import 'textangular/dist/textAngular.min.js';
import 'textangular/dist/textAngular.css';

import './index.less';

export default ng.module('app', [
  'ui.bootstrap',
  'textAngular',
]);
