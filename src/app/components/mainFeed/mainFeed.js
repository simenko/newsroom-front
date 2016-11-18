import BaseDoInject from '../../BaseController';

export const bindings = {};

export class controller extends BaseDoInject('stories') {
  constructor(...args) {
    super(...args);
  }

  $onInit() {
    this.stories.list();
  }
}
