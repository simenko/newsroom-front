import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$scope $state users session') {
  constructor(...args) {
    super(...args);

    this.credentials = {
      name: '',
      email: '',
      password: '',
      role: 'author',
    };
  }

  $onInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    if (this.session.currentUser.loggedIn) {
      this.$scope.$emit('alert', { msg: 'You are already logged in. Log out to register another account.', ttl: 60000 });
    }
  }

  register() {
    this.users.register(this.credentials)
      .then((user) => {
        this.session.login(this.credentials);
        this.$state.go('dashboard');
      })
      .catch(err => this.$scope.$emit('alert', { msg: JSON.stringify(err.data.errmsg), type: 'danger', ttl: 60000 }));
  }
}
