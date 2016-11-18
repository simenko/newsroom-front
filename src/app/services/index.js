import ng from 'angular';
import './users';
import './stories';
import './session';
import './realtime';
import './alerts';

export default ng.module('app.services', [
  'app.services.users',
  'app.services.stories',
  'app.services.session',
  'app.services.realtime',
  'app.services.alerts',
]).name;
