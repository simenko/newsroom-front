import ng from 'angular';
import alerts from './alerts';

export default ng.module('app.services.alerts', [])
  .service('alerts', alerts)
  .name;
