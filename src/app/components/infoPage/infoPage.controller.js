export default class {
  constructor($stateParams) {
    'ngInject';
    this.page = $stateParams.page || 'help';
  }
};
