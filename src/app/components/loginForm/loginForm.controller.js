export default class loginFormController {
  constructor($rootScope, $state, users, session) {
    'ngInject';

    $rootScope.$on('logout', () => this.error = null);
    this.session = session;
    this.$state = $state;
    this.users = users;
    this.credentials = {
      email: '',
      password: '',
    };
    this.error = null;
  }

  $onInit() {
    if (this.session.currentUser.loggedIn) {
      this.error = 'You are already logged in.';
    }
  }

  login() {
    this.users.login(this.credentials)
      .then(() => this.$state.go('home'))
      .catch(() => this.error = 'Login incorrect. Please, try again.');
  }
}
