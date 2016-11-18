import ng from 'angular';
import template from './mainFeed.html';
import './mainFeed.less';
import { bindings, controller } from './mainFeed';

export default ng.module('app.components.mainFeed', [])
  .component('mainFeed', {
    template,
    controller,
    bindings,
  }).name;
