import ng from 'angular';
import template from './storyContent.html';
import './storyContent.less';
import { bindings, controller } from './storyContent';

export default ng.module('app.components.storyContent', [])
  .component('storyContent', {
    template,
    controller,
    bindings,
  }).name;
