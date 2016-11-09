import ng from 'angular';
import registerFormComponent from './registerForm.component';

export default ng.module('app.components.registerForm', [])
  .component('registerForm', registerFormComponent)
  .name;
