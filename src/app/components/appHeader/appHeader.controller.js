export default class appHeaderController {
  constructor($scope, users, session) {
    'ngInject';

    this.$scope = $scope;
    this.session = session;
    this.users = users;
    this.isNavCollapsed = true;
  }

  logout() {
    this.users.logout();
  }

}
