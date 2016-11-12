export default class session {
  constructor() {
    'ngInject';

    this.currentUser = {};
    this.currentStory = {};
  }

  setUser(user) {
    this.currentUser.id = user.id;
    this.currentUser.name = user.name;
    this.currentUser.role = user.role;
    this.currentUser.loggedIn = true;
  }

  unsetUser() {
    this.currentUser = {};
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
