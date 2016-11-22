import BaseAndInjects from '../../InjectedBase';

export class controller extends BaseAndInjects('stories') {
  constructor(...args) {
    super(...args);
  }

  $onInit() {
    this.stories.list();
  }
}
