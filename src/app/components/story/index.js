import ng from 'angular';
import storyComponent from './story.component';

export default ng.module('app.components.story', [])
  .component('story', storyComponent)
  .name;
