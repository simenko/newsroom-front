import ng from 'angular';
import storyContentComponent from './storyContent.component';

export default ng.module('app.components.storyContent', [])
  .component('storyContent', storyContentComponent)
  .name;
