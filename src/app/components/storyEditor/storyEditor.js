import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$scope $stateParams moment stories session realtime') {
  constructor(...args) {
    super(...args);

    this.storyBuffer = {};
    this.permanentLock = null;
    this.temporaryLock = null;
  }

  $postLink() {
    this.stories.readDetails(this.$stateParams._id)
      .then(() => {
        this.storyBuffer = this.session.currentStory;
        this.permanentLock = !!this.storyBuffer.locked_by;
      });
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
        this.temporaryLock = null;
      })
      .catch((locker) => {
        this.temporaryLock = locker;
      });
  }

  updateBuffer(diff) {
    this.$scope.$evalAsync(() => {
      Object.assign(this.storyBuffer, diff);
      if (this.storyBuffer.locked_by) this.permanentLock = true;
    });
  }

  toggleLockStatus() {
    this.storyBuffer.locked_by = this.permanentLock ? this.session.currentUser : null;
  }

  alertOnPublish() {
    if (this.storyBuffer.stage === 'published') {
      this.$scope.$emit('alert', { msg: 'You have published the story.', type: 'success' });
    }
    if (this.storyBuffer.published_at && this.storyBuffer.stage !== 'published') {
      this.$scope.$emit('alert',
        { msg: 'You have unpublished the story. Unregistered users will not see it anymore.' });
    }
  }
}
