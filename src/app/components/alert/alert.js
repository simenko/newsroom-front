import InjectToBase from '../../InjectedBase';

export class controller extends InjectToBase('alerts') {
  constructor(...args) {
    super(...args);
  }

  closeAlert(index) {
    this.alerts.que[index].hide = true;
  }
}
