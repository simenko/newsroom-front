export default class {
  constructor($stateParams, stories, session) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.stories = stories;
    this.session = session;
    this.editMode = true;
    this.storyBuffer = {};
  }

  $onInit() {
    if (this.$stateParams._id) {
      this.stories.read(this.$stateParams._id)
        .then(this.storyBuffer = this.session.currentStory);
    }
  }

  saveStory() {
    console.log(!!this.session.currentStory._id)
    if (this.session.currentStory._id) {
      this.stories.update(this.storyBuffer);
    } else {
      this.stories.create(this.storyBuffer);
    }
  }
}
