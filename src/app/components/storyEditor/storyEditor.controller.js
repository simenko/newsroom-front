export default class {
  constructor($stateParams, moment, stories, session, users) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.moment = moment;
    this.users = users;
    this.stories = stories;
    this.session = session;
    this.preview = false;
    this.storyBuffer = {};
    this.error = null;
    this.hoursToDeadline;
  }

  $onInit() {
    // this.users.list()
    //   .then(() => {
        if (this.session.currentUser.role === 'editor') {
          this.possibleAssignees = this.users.all;
        } else {
          this.possibleAssignees = [this.session.currentUser];
        }
      // })
    if (this.$stateParams._id) {
      this.stories.readDetails(this.$stateParams._id)
        .then(() => this.storyBuffer = this.session.currentStory);
    } else {
      this.session.currentStory = {}
      this.session.currentStory.isNew = true;
    }
  }

  save() {
    if (this.session.currentStory.isNew) {
      this.stories.create(this.storyBuffer)
        .then(() => delete this.session.currentStory.isNew)
        .catch((err) => this.error = JSON.stringify(err));
    } else {
      this.stories.update(this.storyBuffer)
        .catch((err) => this.error = JSON.stringify(err));
    }
  }

  setDeadline() {
    this.storyBuffer.deadline_at = this.moment().add(this.hoursToDeadline, 'hours').toDate();
  }

}
