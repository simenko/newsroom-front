import InjectToBase from '../../InjectedBase';

export class controller extends InjectToBase('$rootScope $state session users stories') {
  constructor(...args) {
    super(...args);
  }

  $onInit() {
    this.users.read(this.session.currentUser._id);
  }
}
