import InjectToBase from '../../InjectedBase';

export class controller extends InjectToBase('$state stories users session') {
  constructor(...args) {
    super(...args);

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

  createStory() {
    this.stories.create({ created_by: this.session.currentUser._id })
      .then((story) => this.$state.go('editStory', { _id: story._id }));
  }

  removeStory(_id) {
    this.stories.remove(_id);
  }


}
