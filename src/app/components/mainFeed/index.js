import ng from 'angular';
import mainFeedComponent from './mainFeed.component';

export default ng.module('app.components.mainFeed', [])
  .component('mainFeed', mainFeedComponent)
  .name;
