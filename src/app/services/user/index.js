import ng from 'angular';
import user from './user';

export default ng.module('app.services.user', [])
  .service('user', user)
  .name;
