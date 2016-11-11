export default class appHeaderController {
  constructor($scope, users) {
    'ngInject';
    this.$scope = $scope
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
