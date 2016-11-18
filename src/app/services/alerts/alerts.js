export default class notifications {
  constructor($rootScope, $timeout, realtime, session) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.realtime = realtime;
    this.session = session;
    this.que = [];
    this.ttl = 5000;
    this.$rootScope.$on('alert', (event, alert) => {
      this.que.push(alert);
      this.$timeout(() => this.que.shift(), this.ttl);
    });
  }
}
