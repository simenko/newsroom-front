import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('stories') {
  $onInit() {
    this.stories.list();
  }
}
