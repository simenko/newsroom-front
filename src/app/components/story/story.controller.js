export default class {
  constructor($stateParams, stories, session, users) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.users = users;
    this.stories = stories;
    this.session = session;
    this.editMode = false;
    this.storyBuffer = {};
    this.storyBuffer.assignee = this.session.currentUser._id;
  }

  $onInit() {
    this.users.list();
    if (this.$stateParams._id) {
      this.stories.read(this.$stateParams._id)
        .then(() => this.storyBuffer = this.session.currentStory);
    }
  }

  save() {
    if (this.session.currentStory._id) {
      this.stories.update(this.storyBuffer);
    } else {
      this.stories.create(this.storyBuffer);
    }
    this.editMode = false;
  }

  edit() {
    this.editMode = true;
  }
}
