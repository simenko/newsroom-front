export default class registerFormController {
  constructor($state, users) {
    'ngInject';
    this.$state = $state
    this.users = users;
    this.credentials = {
      name: '',
      email: '',
      password: '',
      role: 'author',
    };
  }

  $onInit() {
    if (this.users.currentUser.loggedIn) {
      alert('you are already logged in');
    }
  }

  register() {
    this.users.register(this.credentials)
      .then(() => this.$state.go('home'))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
