import ng from 'angular';
import template from './alert.html';
import './alert.less';
import controller, { bindings } from './alert';

export default ng.module('app.components.alert', [])
  .component('alert', {
    template,
    controller,
    bindings,
  }).name;
