import BaseAndInjects from '../../InjectedBase';

export class controller extends BaseAndInjects('$rootScope $state session users stories') {
  constructor(...args) {
    super(...args);
  }

  $onInit() {
    this.users.read(this.session.currentUser._id);
  }
}
