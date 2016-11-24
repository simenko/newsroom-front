/* global env */
import BaseAndInjects from '../../InjectedBase';

export default class users extends BaseAndInjects('$http') {
  constructor(...args) {
    super(...args);
    this.roles = ['author', 'editor'];
  }

  register(user) {
    return this.$http.post(`${env.API_URL}/users`, user).then(res => res.data);
  }

  list() {
    return this.$http.get(`${env.API_URL}/users`).then(res => res.data);
  }

  read(_id) {
    return this.$http.get(`${env.API_URL}/users/${_id}`).then(res => res.data);
  }

  update(user) {
    return this.$http.put(`${env.API_URL}/users/${user._id}`, user).then(res => res.data);
  }

  delete() {
    return this.$http.delete(`${env.API_URL}/users`);
  }
}
