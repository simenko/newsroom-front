import ng from 'angular';
import users from './users';

export default ng.module('app.services.users', [])
  .service('users', users)
  .name;
