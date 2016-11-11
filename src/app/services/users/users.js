export default class users {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.error = '';
    this.list = [];
    this.roles = ['author', 'editor'];
  }
  list() {
    return this.$http.get(`${env.API_URL}/users`).then(responce => responce.data);
  }

  read(id) {
    return this.$http.get(`${env.API_URL}/users/${id}`).then(responce => responce.data);
  }

  register(user) {
    return this.$http.post(`${env.API_URL}/users/register`, user).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  login(user) {
    return this.$http.post(`${env.API_URL}/users/login`, user).then(responce => console.log(responce));
  }

  logout() {
    return this.$http.post(`${env.API_URL}/users/logout`).then(responce => responce.data);
  }

  update(user) {
    return this.$http.put(`${env.API_URL}/users/${user.id}`, user).then(responce => responce.data);
  }

  delete() {
    return this.$http.delete(`${env.API_URL}/users`);
  }
}
