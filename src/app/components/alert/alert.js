import BaseDoInject from '../../BaseController';

export const bindings = {};

export class controller extends BaseDoInject('alerts') {
  constructor(...args) {
    super(...args);
  }

  closeAlert(index) {
    this.alerts.que[index].hide = true;
  }
}
