/* global localStorage, env */

import BaseAndInjects from '../../InjectedBase';

export default class session extends BaseAndInjects('$http users') {
  constructor(...args) {
    super(...args);
    if (localStorage.currentUser) {
      this.currentUser = JSON.parse(localStorage.currentUser);
    } else {
      this.currentUser = {};
    }
    if (localStorage.currentStory) {
      this.currentStory = JSON.parse(localStorage.currentStory);
    } else {
      this.currentStory = {};
    }
    this.allUsers = [];
  }

  check() {
    if (!localStorage.currentUser) return;
    this.users.read(JSON.parse(localStorage.currentUser)._id)
      .then(user => this.setUser(user))
      .catch(() => {
        this.unsetUser();
      });
  }

  login(credentials) {
    return this.$http.post(`${env.API_URL}/session`, credentials)
      .then(res => this.setUser(res.data));
  }

  logout() {
    this.unsetUser();
    return this.$http.delete(`${env.API_URL}/session`);
  }

  setUser(user) {
    this.currentUser = user;
    this.currentUser.loggedIn = true;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    this.users.list()
      .then(list => this.allUsers = list);
  }

  unsetUser() {
    this.currentUser = {};
    localStorage.clear();
  }

  setStory(story) {
    this.currentStory = story;
    localStorage.setItem('currentStory', JSON.stringify(this.currentStory));
  }

  unsetStory() {
    this.currentStory = {};
    localStorage.removeItem('currentStory');
  }

}
