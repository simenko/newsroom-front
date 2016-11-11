export default class loginFormController {
  constructor(users) {
    'ngInject';
    this.users = users;
    this.user = {
      email: '',
      password: '',
    };
  }

  login() {
    console.log(this.user);
    this.users.login(this.user);
  }
}
