export default class {
  constructor($rootScope, $state, session, users, stories) {
    'ngInject';

    this.$state = $state;
    this.$rootScope = $rootScope
    this.session = session;
    this.users = users;
    this.stories = stories;
  }

  $onInit() {
    this.users.read(this.session.currentUser._id)
      .then(this.users.list());
    this.stories.list();
  }             1
}
