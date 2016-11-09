import ng from 'angular';

import './app';
import './appHeader';
import './infoPage';
import './loginForm';
import './registerForm';
import './newStoryForm';
import './story';
import './storyBlock';
import './storyBlockEditor';
import './storyBlockToolbar';
import './storyGrid';
import './storyGridToolbar';
import './storyToolbar';

export default ng.module('app.components', [
  'app.components.app',
  'app.components.appHeader',
  'app.components.infoPage',
  'app.components.loginForm',
  'app.components.registerForm',
  'app.components.newStoryForm',
  'app.components.story',
  'app.components.storyBlock',
  'app.components.storyBlockEditor',
  'app.components.storyBlockToolbar',
  'app.components.storyGrid',
  'app.components.storyGridToolbar',
  'app.components.storyToolbar',
]).name;
