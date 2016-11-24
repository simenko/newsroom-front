import ng from 'angular';
import template from './storyDashboard.html';
import './storyDashboard.less';
import controller, { bindings } from './storyDashboard';

export default ng.module('app.components.storyDashboard', [])
  .component('storyDashboard', {
    template,
    controller,
    bindings,
  }).name;
