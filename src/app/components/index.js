import ng from 'angular';

import './app';
import './appHeader';
import './infoPage';
import './loginForm';
import './registerForm';
import './story';
import './storyGrid';
import './storyContent';

export default ng.module('app.components', [
  'app.components.app',
  'app.components.appHeader',
  'app.components.infoPage',
  'app.components.loginForm',
  'app.components.registerForm',
  'app.components.story',
  'app.components.storyContent',
  'app.components.storyGrid',
]).name;
