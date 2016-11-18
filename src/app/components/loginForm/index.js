import ng from 'angular';
import template from './loginForm.html';
import './loginForm.less';
import { bindings, controller } from './loginForm';

export default ng.module('app.components.loginForm', [])
  .component('loginForm', {
    template,
    controller,
    bindings,
  }).name;
