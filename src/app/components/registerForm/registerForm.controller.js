export default class registerFormController {
  constructor(users) {
    'ngInject';
    this.users = users;
    this.user = {
      name: '',
      email: '',
      password: '',
      role: 'author',
    };
  }

  $onInit() {

  }

  register() {
    console.log(this.user);
    this.users.register(this.user);
  }
}
