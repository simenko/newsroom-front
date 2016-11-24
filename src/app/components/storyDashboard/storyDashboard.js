import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$scope $state ngDialog stories session') {
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
    this.stories.create({ created_by: this.session.currentUser._id})
      .then(story => this.$state.go('editStory', { _id: story._id }));
  }

  removeStory(story) {
    if (story.locked_by && this.session.currentUser.role !== 'editor') {
      this.$scope.$emit('alert', { msg: `This story is locked by ${story.locked_by.name}.` });
      return;
    }
    this.ngDialog.openConfirm({
      template: 'ConfirmDeletionDialog',
      className: 'ngdialog-theme-plain'
    }).then(() => {
      this.stories.remove(story._id)
        .then(() => this.stories.listMetadata());
    });
  }
}
