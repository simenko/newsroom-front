export default class {
  constructor($state, stories, users) {
    'ngInject';

    this.$state = $state;
    this.users = users;
    this.stories = stories;
    this.isNavCollapsed = true;
    this.displayedCollection = [].concat(this.stories.all);
  }

  $onInit() {
    this.init();
  }

  init() {
    this.users.list();
    this.stories.listMetadata();
  }

  remove(_id) {
    this.stories.remove(_id);
  }
}
