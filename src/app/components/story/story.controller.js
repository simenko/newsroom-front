export default class {
  constructor($stateParams, stories, session, users) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.users = users;
    this.stories = stories;
    this.session = session;
    this.editMode = false;
    this.storyBuffer = {};
    this.error = null;
  }

  $onInit() {
    this.users.list();
    if (this.$stateParams._id) {
      this.stories.read(this.$stateParams._id)
        .then(() => this.storyBuffer = this.session.currentStory);
    } else {
      this.session.currentStory = {};
    }
  }

  save() {
    if (this.session.currentStory._id) {
      this.stories.update(this.storyBuffer)
        .then(() => this.editMode = false)
        .catch((err) => this.error = JSON.stringify(err));
    } else {
      this.stories.create(this.storyBuffer)
        .then(() => this.editMode = false)
        .catch((err) => this.error = JSON.stringify(err));
    }
  }

  edit() {
    this.editMode = true;
  }
}
