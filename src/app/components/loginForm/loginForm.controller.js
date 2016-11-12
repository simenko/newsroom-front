export default class loginFormController {
  constructor($state, users, session) {
    'ngInject';

    this.session = session;
    this.$state = $state;
    this.users = users;
    this.credentials = {
      email: '',
      password: '',
    };
  }

  $onInit() {
    if (this.session.currentUser.loggedIn) {
      alert('you are already logged in');
    }
  }

  login() {
    this.users.login(this.credentials)
      .then(() => this.$state.go('home'))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
