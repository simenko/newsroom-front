import BaseDoInject from '../../BaseController';

export const bindings = {};

export class controller extends BaseDoInject('$rootScope $state session users stories') {
  constructor(...args) {
    super(...args);
  }

  $onInit() {
    this.users.read(this.session.currentUser._id);
  }
}
