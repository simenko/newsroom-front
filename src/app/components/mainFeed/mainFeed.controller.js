export default class {
  constructor(stories) {
    'ngInject';

    this.stories = stories;
  }

  $onInit() {
    this.stories.list();
  }
}
