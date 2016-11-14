export default class registerFormController {
  constructor($state, users, session) {
    'ngInject';

    this.session = session;
    this.$state = $state
    this.users = users;
    this.credentials = {
      name: '',
      email: '',
      password: '',
      role: 'author',
    };
    this.error = null;
  }

  $onInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    if (this.session.currentUser.loggedIn) {
      this.error = 'You are already logged in. Log out to register another account.';
    }
  }

  register() {
    this.users.register(this.credentials)
      .then(() => this.$state.go('home'))
      .catch((err) => alert(JSON.stringify(err.data)));
  }
}
