import ng from 'angular';
import template from './mainFeed.html';
import './mainFeed.less';
import controller, { bindings } from './mainFeed';

export default ng.module('app.components.mainFeed', [])
  .component('mainFeed', {
    template,
    controller,
    bindings,
  }).name;
