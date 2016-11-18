import InjectToBase from '../../InjectedBase';

export class controller extends InjectToBase('stories') {
  constructor(...args) {
    super(...args);
  }

  $onInit() {
    this.stories.list();
  }
}
