import ng from 'angular';
import realtime from './realtime';

export default ng.module('app.services.realtime', [])
  .service('realtime', realtime)
  .name;
