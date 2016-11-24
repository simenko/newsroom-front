import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$rootScope $state session') {
  constructor(...args) {
    super(...args);

    this.isNavCollapsed = true;
  }

  logout() {
    this.$rootScope.$emit('logout');
    this.session.logout();
    this.$state.go('home');
  }
}
