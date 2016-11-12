import ng from 'angular';
import stories from './stories';

export default ng.module('app.services.stories', [])
  .service('stories', stories)
  .name;
