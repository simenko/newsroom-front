export default class user {
  constructor($http, env) {
    'ngInject';
    this.$http = $http;
    this.error = '';
    this.env = env;
  }
  list() {
    return this.$http.get(`${this.env.API_URL}/users`).then(responce => responce.data);
  }

  read(id) {
    return this.$http.get(`${this.env.API_URL}/users/${id}`).then(responce => responce.data);
  }

  register(user) {
    return this.$http.post(`${this.env.API_URL}/users/register`, { user }).then(responce => responce.data);
  }

  login(user) {
    return this.$http.post(`${this.env.API_URL}/users/login`, { user }).then(responce => responce.data);
  }

  logout() {
    return this.$http.post(`${this.env.API_URL}/users/logout`).then(responce => responce.data);
  }

  update(user) {
    return this.$http.put(`${this.env.API_URL}/users/${user.id}`, { user }).then(responce => responce.data);
  }

  delete() {
    return this.$http.delete(`${this.env.API_URL}/users`);
  }
}
