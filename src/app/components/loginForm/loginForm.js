import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$rootScope $state session') {
  constructor(...args) {
    super(...args);

    this.$rootScope.$on('logout', () => { this.error = null; });
    this.credentials = {
      email: '',
      password: '',
    };
  }

  $onInit() {
    if (this.session.currentUser.loggedIn) {
      this.$rootScope.$broadcast('alert', { msg: 'You are already logged in.', type: 'danger', ttl: 60000 });
    }
  }

  login() {
    this.session.login(this.credentials)
      .then(() => this.$state.go('dashboard'))
      .catch((err) => {
        if (err.status === 401) {
          this.$rootScope.$broadcast('alert', { msg: 'Login incorrect. Please, try again.', type: 'danger' });
        } else {
          this.$rootScope.$broadcast('alert', { msg: 'Oops! Something went wrong... Please, try again.' });
        }
      });
  }
}
