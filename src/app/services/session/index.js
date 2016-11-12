import ng from 'angular';
import session from './session';

export default ng.module('app.services.session', [])
  .service('session', session)
  .name;
