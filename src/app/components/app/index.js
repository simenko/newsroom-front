import ng from 'angular';
import appComponent from './app.component';

export default ng.module('app.components.app', [])
  .component('app', appComponent)
  .name;
