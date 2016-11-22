import InjectToBase from '../../InjectedBase';

export class controller extends InjectToBase('$scope $timeout $stateParams moment stories session users realtime') {
  constructor(...args) {
    super(...args);

    this.preview = false;
    this.storyBuffer = {};
    this.error = null;
    this.hoursToDeadline = null;
  }

  $postLink() {
    if (this.session.currentUser.role === 'editor') {
      this.possibleAssignees = this.users.all;
    } else {
      this.possibleAssignees = [this.session.currentUser];
    }
    this.stories.readDetails(this.$stateParams._id)
      .then(() => { this.storyBuffer = this.session.currentStory; });
    this.realtime.joinStory(this.updateBuffer.bind(this));
  }

  userInput() {
    if (this.permanentLock && this.session.currentUser.role !== 'editor') {
      this.$scope.$emit('alert', { msg: `Editing is locked by ${this.storyBuffer.locked_by.name}`, type: 'danger' })
      return;
    }
    this.realtime.editRequest()
      .then(() => {
        this.$scope.$watch('$ctrl.storyBuffer', this.realtime.setWatcher(), true);
      })
      .catch((locker) => {
        this.lockedBy = locker;
      });
  }

  updateBuffer(diff) {
    this.$timeout(() => Object.assign(this.storyBuffer, diff));
  }

  saveStory() {
    this.stories.update(this.storyBuffer)
      .then(() => this.realtime.stopEditing())
      .catch(err => this.error = JSON.stringify(err));
  }

  alertOnPublish() {
    if (this.storyBuffer.stage === 'published') {
      this.$scope.$emit('alert', { msg: 'You have published the story.', type: 'success' });
    }
    if (this.storyBuffer.published_at && this.storyBuffer.stage !== 'published') {
      this.$scope.$emit('alert', { msg: 'You have unpublished the story. Unregistered users will not see it anymore.' });
    }
  }
}
