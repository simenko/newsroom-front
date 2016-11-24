import ng from 'angular';
import template from './registerForm.html';
import './registerForm.less';
import controller, { bindings } from './registerForm';

export default ng.module('app.components.registerForm', [])
  .component('registerForm', {
    template,
    controller,
    bindings,
  }).name;
