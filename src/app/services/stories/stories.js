/* global env */

export default class stories {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.all = [];
  }

  list() {
    return this.$http.get(`${env.API_URL}/stories`).then(response => response.data);
  }

  read(id) {
    return this.$http.get(`${env.API_URL}/stories/${id}`).then(response => response.data);
  }

  create(story) {
    return this.$http.post(`${env.API_URL}/stories/`, story).then(response => response.data);
  }

  update(story) {
    return this.$http.put(`${env.API_URL}/stories/${story.id}`, story).then(response => response.data);
  }

  remove(id) {
    return this.$http.delete(`${env.API_URL}/stories${id}`);
  }
}
