import ng from 'angular';
import template from './app.html';
import './app.less';
import controller, { bindings } from './app';

export default ng.module('app.components.app', [])
  .component('app', {
    template,
    controller,
    bindings,
  }).name;
