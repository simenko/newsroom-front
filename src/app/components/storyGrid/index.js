import ng from 'angular';
import storyGridComponent from './storyGrid.component';

export default ng.module('app.components.storyGrid', [])
  .component('storyGrid', storyGridComponent)
  .name;
