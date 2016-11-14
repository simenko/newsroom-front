export default class appHeaderController {
  constructor($rootScope, users, session) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.session = session;
    this.users = users;
    this.isNavCollapsed = true;
  }

  logout() {
    this.$rootScope.$emit('logout');
    this.users.logout();
  }

}
