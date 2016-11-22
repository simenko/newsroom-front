import BaseAndInjects from '../../InjectedBase';

export class controller extends BaseAndInjects('$rootScope $state users session') {
  constructor(...args) {
    super(...args);

    this.$rootScope.$on('logout', () => { this.error = null; });
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
      .catch((err) => {
        if (err.status === 401) {
          this.error = 'Login incorrect. Please, try again.';
        } else {
          this.error = 'Oops! Something went wrong... Please, try again.';
        }
      });
  }
}
