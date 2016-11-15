export default class {
  constructor($state, stories, users) {
    'ngInject';

    this.$state = $state;
    this.users = users;
    this.stories = stories;
    this.isNavCollapsed = true;
    this.selectedAuthor = '';
    this.displayedCollection = [].concat(this.stories.all);
  }

  $onInit() {
    this.init();
  }

  init() {
    this.stories.list();
  }

  remove(_id) {
    this.stories.remove(_id);
  }
}
