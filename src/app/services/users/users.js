export default class users {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.error = '';
    this.list = [];
    this.currentUser = {};
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
      .then(res => {
        this.currentUser.id = res.data.id;
        this.currentUser.name = res.data.name;
        this.currentUser.role = res.data.role;
        this.currentUser.loggedIn = true;
      });
  }

  login(user) {
    return this.$http.post(`${env.API_URL}/users/login`, user)
      .then(res => {
        this.currentUser.id = res.data.id;
        this.currentUser.name = res.data.name;
        this.currentUser.role = res.data.role;
        this.currentUser.loggedIn = true;
      });
  }

  logout() {
    return this.$http.post(`${env.API_URL}/users/logout`)
      .then(() => {
        this.currentUser.id = null;
        this.currentUser.name = null;
        this.currentUser.role = null;
        this.currentUser.loggedIn = false;
      });
  }

  update(user) {
    return this.$http.put(`${env.API_URL}/users/${user.id}`, user).then(responce => responce.data);
  }

  delete() {
    return this.$http.delete(`${env.API_URL}/users`);
  }
}
