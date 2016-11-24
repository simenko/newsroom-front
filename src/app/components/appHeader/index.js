import ng from 'angular';
import template from './appHeader.html';
import './appHeader.less';
import controller, { bindings } from './appHeader';

export default ng.module('app.components.appHeader', [])
  .component('appHeader', {
    template,
    controller,
    bindings,
  }).name;
