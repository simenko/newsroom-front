import BaseAndInjects from '../../InjectedBase';

export default class controller extends BaseAndInjects('$rootScope') {
  constructor(...args) {
    super(...args);

    this.alerts = [];
    this.$rootScope.$on('alert', (event, alert) => {
      this.$rootScope.$evalAsync(() => {
        if (this.alerts.length && this.alerts[this.alerts.length - 1].msg === alert.msg) {
          this.alerts.pop();
        }
        this.alerts.push(alert);
      });
    });
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
