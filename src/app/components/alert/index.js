import ng from 'angular';
import template from './alert.html';
import './alert.less';
import { bindings, controller } from './alert';

export default ng.module('app.components.alert', [])
  .component('alert', {
    template,
    controller,
    bindings,
  }).name;
