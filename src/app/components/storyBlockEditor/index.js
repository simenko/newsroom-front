import ng from 'angular';
import storyBlockEditorComponent from './storyBlockEditor.component';

export default ng.module('app.components.storyBlockEditor', [])
  .component('storyBlockEditor', storyBlockEditorComponent)
  .name;
