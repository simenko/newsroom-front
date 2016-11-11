export default class loginFormController {
  constructor($state, users) {
    'ngInject';
    this.$state = $state;
    this.users = users;
    this.credentials = {
      email: '',
      password: '',
    };
  }

  $onInit() {
    if (this.users.currentUser.loggedIn) {
      alert('you are already logged in');
    }
  }

  login() {
    this.users.login(this.credentials)
      .then(() => this.$state.go('home'))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
