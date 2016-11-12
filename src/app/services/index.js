import ng from 'angular';
import './users';

export default ng.module('app.services', [
  'app.services.users',
  'app.services.stories',
  'app.services.session',
]).name;
