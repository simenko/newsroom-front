import ng from 'angular';
import storyEditorComponent from './storyEditor.component';

export default ng.module('app.components.storyEditor', [])
  .component('storyEditor', storyEditorComponent)
  .name;
