export default class {
  constructor($stateParams, stories, session) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.stories = stories;
    this.session = session;
    this.editMode = true;
  }

  $onInit() {
    if (!this.$stateParams.id) {

    }
  }
}
