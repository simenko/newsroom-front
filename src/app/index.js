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

/**
 * FIXME: Since version 1.0.0 ui-router does not use state change events. I use legacy method
 * to authenticate routes, because it is well documented and it just works.
*/
import 'angular-ui-router/commonjs/ng1/legacy/stateEvents';

import './components';
import './services';
import './routes';

export default ng.module('app', [
  'ui.bootstrap',
  'textAngular',
  'smart-table',
  'angularMoment',
  'ui.router',
  'ui.router.state.events',
  'app.components',
  'app.services',
  'app.routes',
])
.config(['$httpProvider', ($httpProvider) => {
  'ngInject';

  $httpProvider.defaults.withCredentials = true;
}])
.run(($rootScope, session, $state) => {
  'ngInject';

  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    if (toState.authenticate && !session.currentUser.loggedIn) {
      $state.transitionTo('login');
      event.preventDefault();
    }
  });
}).name;
