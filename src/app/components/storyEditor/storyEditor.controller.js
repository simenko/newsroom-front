export default class {
  constructor($scope, $stateParams, moment, stories, session, users, realtime) {
    'ngInject';

    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.moment = moment;
    this.users = users;
    this.stories = stories;
    this.session = session;
    this.realtime = realtime;
    this.preview = false;
    this.storyBuffer = {};
    this.error = null;
    this.hoursToDeadline;
  }

  $onInit() {
    if (this.session.currentUser.role === 'editor') {
      this.possibleAssignees = this.users.all;
    } else {
      this.possibleAssignees = [this.session.currentUser];
    }
    this.stories.readDetails(this.$stateParams._id)
      .then(() => this.storyBuffer = this.session.currentStory);
    this.realtime.startEditing(this.updateBuffer.bind(this));
    this.$scope.$watch('$ctrl.storyBuffer', this.realtime.setWatcher(), true);
  }

  updateBuffer(diff) {
    Object.assign(this.storyBuffer, diff);
    this.$scope.$digest();
  }

  saveStory() {
    this.stories.update(this.storyBuffer)
      .catch((err) => this.error = JSON.stringify(err));
  }

  setDeadline() {
    this.storyBuffer.deadline_at = this.moment()
      .add(this.hoursToDeadline, 'hours')
      .toDate();
  }

}
