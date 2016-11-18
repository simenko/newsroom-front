import InjectToBase from '../../InjectedBase';

export class controller extends InjectToBase('$rootScope users session') {
  constructor(...args) {
    super(...args);

    this.isNavCollapsed = true;
  }

  logout() {
    this.$rootScope.$emit('logout');
    // TODO: move login/logout logic to session service
    this.users.logout();
  }
}
