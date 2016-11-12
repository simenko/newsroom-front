export default class appHeaderController {
  constructor($scope, users, session) {
    'ngInject';

    this.$scope = $scope;
    this.session = session;
    this.users = users;
  }

  logout() {
    this.users.logout()
      .then(() => {
        console.log (this.users.currentUser)
        this.$scope.$digest()
      });
  }

}
