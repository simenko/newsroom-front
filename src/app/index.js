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
import 'angular-ui-grid/ui-grid';
import 'angular-ui-grid/ui-grid.css';

import './components';
import './services';

export default ng.module('app', [
  'ui.bootstrap',
  'textAngular',
  'ui.grid',
  'app.components',
  'app.services',
]).name;
