import template from './storyContent.html';
import './storyContent.less';
import controller from './storyContent.controller';

export default {
  template,
  controller,
  bindings: {
    story: '<',
    preview: '<',
  }
};
