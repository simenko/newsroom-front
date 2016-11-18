import help from './help.html';
import about from './about.html';


import BaseDoInject from '../../BaseController';

export const bindings = {};

export class controller extends BaseDoInject('$stateParams') {
  constructor(...args) {
    super(...args);

    this.pages = {};
    this.pages.help = help;
    this.pages.about = about;
    this.content = this.pages[this.$stateParams.page] || this.pages.help;
  }
}
