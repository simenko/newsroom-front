/* global env */

export default class users {
  constructor($http, session) {
    'ngInject';

    this.$http = $http;
    this.session = session;
    this.all = [];
    this.roles = ['author', 'editor'];
  }

  list() {
    return this.$http.get(`${env.API_URL}/users`).then(res => res.data);
  }

  read(_id) {
    return this.$http.get(`${env.API_URL}/users/${_id}`).then(res => res.data);
  }

  register(user) {
    return this.$http.post(`${env.API_URL}/users/register`, user)
      .then(res => this.session.setUser(res.data));
  }

  login(user) {
    return this.$http.post(`${env.API_URL}/users/login`, user)
      .then(res => this.session.setUser(res.data));
  }

  logout() {
    this.session.unsetUser()
    return this.$http.post(`${env.API_URL}/users/logout`);
  }

  update(user) {
    return this.$http.put(`${env.API_URL}/users/${user._id}`, user).then(res => res.data);
  }

  delete() {
    return this.$http.delete(`${env.API_URL}/users`);
  }
}
