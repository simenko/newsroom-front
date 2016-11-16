/* global env */

import * as io from 'socket.io-client';

export default class realtime {
  constructor($timeout, session) {
    'ngInject';

    this.$timeout = $timeout;
    this.session = session;
    this.socket = io.connect(env.SOCKETS_URL, {
      transports: ['websocket'],
      upgrade: false
    });
    this.throttlingDelay = 300;
    this.newVal = null;
  }

  startEditing(onChanges) {
    this.socket.emit('startEditing', this.session.currentStory._id);
    this.socket.on('changes', onChanges);
  }

  setWatcher() {
    return this.watcher.bind(this);
  }

  watcher(newVal) {
    if (!this.newVal) {
      this.$timeout(() => {
        this.socket.emit('update', newVal);
        this.newVal = null;
      }, this.throttlingDelay);
    }
    this.newVal = newVal;
  }
}
