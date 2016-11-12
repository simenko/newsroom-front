/* global localStorage */

export default class session {
  constructor() {
    'ngInject';

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
  }

  setUser(user) {
    this.currentUser = user;
    this.currentUser.loggedIn = true;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
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
