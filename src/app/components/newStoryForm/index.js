import ng from 'angular';
import newStoryFormComponent from './newStoryForm.component';

export default ng.module('app.components.newStoryForm', [])
  .component('newStoryForm', newStoryFormComponent)
  .name;
