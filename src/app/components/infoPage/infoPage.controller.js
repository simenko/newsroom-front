import help from './help.html';
import about from './about.html';

export default class {
  constructor($stateParams) {
    'ngInject';

    this.pages = {};
    this.pages.help = help;
    this.pages.about = about;
    this.content = this.pages[$stateParams.page] || this.pages.help;
  }
};
