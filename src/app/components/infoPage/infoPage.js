import help from './help.html';
import about from './about.html';


import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$stateParams') {
  constructor(...args) {
    super(...args);

    this.pages = {};
    this.pages.help = help;
    this.pages.about = about;
    this.content = this.pages[this.$stateParams.page] || this.pages.help;
  }
}
