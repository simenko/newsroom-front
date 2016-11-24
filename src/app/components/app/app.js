import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$state session') {
  $onInit() {
    this.users.read(this.session.currentUser._id);
  }
}
