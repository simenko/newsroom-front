import ng from 'angular';
import storyBlockComponent from './storyBlock.component';

export default ng.module('app.components.storyBlock', [])
  .component('storyBlock', storyBlockComponent)
  .name;
