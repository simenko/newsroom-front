import ng from 'angular';
import './storyEditor.less';
import template from './storyEditor.html';
import { bindings, controller } from './storyEditor';

export default ng.module('app.components.storyEditor', [])
  .component('storyEditor', {
    template,
    controller,
    bindings,
  }).name;
