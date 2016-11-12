export default class users {
  constructor($http, session) {
    'ngInject';
    this.$http = $http;
    this.session = session;
    this.all = [];
    this.roles = ['author', 'editor'];
  }

  list() {
    return this.$http.get(`${env.API_URL}/users`).then(responce => responce.data);
  }

  read(id) {
    return this.$http.get(`${env.API_URL}/users/${id}`).then(responce => responce.data);
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
    return this.$http.post(`${env.API_URL}/users/logout`)
      .then(() => this.session.unsetUser());
  }

  update(user) {
    return this.$http.put(`${env.API_URL}/users/${user.id}`, user).then(responce => responce.data);
  }

  delete() {
    return this.$http.delete(`${env.API_URL}/users`);
  }
}
