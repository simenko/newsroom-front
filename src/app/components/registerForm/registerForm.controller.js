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
  }

  $onInit() {
    if (this.session.currentUser.loggedIn) {
      alert('you are already logged in');
    }
  }

  register() {
    this.users.register(this.credentials)
      .then(() => this.$state.go('home'))
      .catch((err) => alert(JSON.stringify(err.data)));
  }
}
