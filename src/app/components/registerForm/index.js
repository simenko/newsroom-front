import ng from 'angular';
import template from './registerForm.html';
import './registerForm.less';
import { bindings, controller } from './registerForm';

export default ng.module('app.components.registerForm', [])
  .component('registerForm', {
    template,
    controller,
    bindings,
  }).name;
