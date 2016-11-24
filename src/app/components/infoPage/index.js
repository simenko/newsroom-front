import ng from 'angular';
import template from './infoPage.html';
import './infoPage.less';
import controller, { bindings } from './infoPage';

export default ng.module('app.components.infoPage', [])
  .component('infoPage', {
    template,
    controller,
    bindings,
  }).name;
