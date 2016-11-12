export default class {
  constructor($state, stories) {
    'ngInject';

    this.$state = $state;
    this.stories = stories;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.stories.list();
  }

  createStory() {
    this.$state.go()
  }
}
