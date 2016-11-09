import ng from 'angular';
import loginFormComponent from './loginForm.component';

export default ng.module('app.components.loginForm', [])
  .component('loginForm', loginFormComponent)
  .name;
