export default class {
  constructor(uiGridConstants) {
    'ngInject';

    this.data = [{
      name: 'vasya',
      title: 'sdbd fdbdfbdf',
    }, {
      name: 'petya',
      title: 'dtbdf drtbd drtbdfbdf',
    }];
    this.gridOptions = {
      enableFiltering: true,
      enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
      enableVerticalScrollbar: uiGridConstants.scrollbars.NEVER,
    };
  }
}
