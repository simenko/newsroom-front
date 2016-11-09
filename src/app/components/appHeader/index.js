import ng from 'angular';
import appHeaderComponent from './appHeader.component';

export default ng.module('app.components.appHeader', [])
  .component('appHeader', appHeaderComponent)
  .name;
