import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$state session') {
  $onInit() {
    this.session.check();
  }
}
