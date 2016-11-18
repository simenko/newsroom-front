import ng from 'angular';

import './app';
import './appHeader';
import './infoPage';
import './loginForm';
import './registerForm';
import './storyEditor';
import './storyDashboard';
import './storyContent';
import './mainFeed';
import './alert';

export default ng.module('app.components', [
  'app.components.app',
  'app.components.appHeader',
  'app.components.infoPage',
  'app.components.loginForm',
  'app.components.registerForm',
  'app.components.storyEditor',
  'app.components.storyContent',
  'app.components.storyDashboard',
  'app.components.mainFeed',
  'app.components.alert',
]).name;
