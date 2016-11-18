/* global env */

import * as io from 'socket.io-client';

export default class realtime {
  constructor($rootScope, $timeout, session) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.session = session;
    this.socket = io.connect(env.SOCKETS_URL, {
      transports: ['websocket'],
      upgrade: false
    });

    this.throttlingDelay = 500;
    this.oldVal = null;
    this.newVal = null;
  }

  joinStory(onChanges) {
    this.socket.emit('joinStory', this.session.currentStory._id);
    this.socket.on('changes', onChanges);
    this.socket.on('editRequest', (user) => {
      this.$rootScope.$broadcast('alert', { msg: `${user} wants to edit this story`, type: 'warning' });
    });
  }

  editRequest() {
    this.socket.emit('editRequest');
    return new Promise((resolve, reject) => {
      this.socket.once('editingGranted', () => resolve());
      this.socket.once('lockedBy', (locker) => {
        this.$rootScope.$broadcast('alert', { msg: `Editing is locked by ${locker}`, type: 'danger' });
        reject(locker);
      });
    });
  }

  stopEditing() {
    this.socket.emit('stopEditing');
  }

  setWatcher() {
    return this.watcher.bind(this);
  }

  watcher(newVal, oldVal) {
    if (!this.newVal) {
      this.oldVal = oldVal;
      this.$timeout(() => {
        this.socket.emit('update', newVal);
        this.newVal = null;
      }, this.throttlingDelay);
    }
    this.newVal = newVal;
  }
}
