import BaseAndInjects from '../../InjectedBase';

export class controller extends BaseAndInjects('$scope $state users session') {
  constructor(...args) {
    super(...args);

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
