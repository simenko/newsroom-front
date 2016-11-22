/* global env */

export default class stories {
  constructor($http, session) {
    'ngInject';

    this.$http = $http;
    this.session = session;
    this.all = [];
    this.stages = ['idea', 'draft', 'ready to review', 'ready to publish', 'published', 'archived'];
  }

  list() {
    return this.$http.get(`${env.API_URL}/stories`).then((res) => {
      this.all = res.data;
    });
  }

  listMetadata() {
    return this.$http.get(`${env.API_URL}/stories/metadata`).then((res) => {
      this.all = res.data;
    });
  }

  read(_id) {
    return this.$http.get(`${env.API_URL}/stories/${_id}`).then(res => {
      this.session.setStory(res.data);
      return res.data;
    });
  }

  readDetails(_id) {
    return this.$http.get(`${env.API_URL}/stories/details/${_id}`).then(res => {
      this.session.setStory(res.data);
      return res.data;
    });
  }

  create(story) {
    return this.$http.post(`${env.API_URL}/stories/`, story)
      .then((res) => {
        this.session.setStory(res.data);
        return res.data;
      });
  }

  update(story) {
    return this.$http.put(`${env.API_URL}/stories/${story._id}`, story)
      .then((res) => {
        this.session.setStory(res.data);
      });
  }

  remove(_id) {
    return this.$http.delete(`${env.API_URL}/stories/${_id}`)
      .then(this.session.unsetStory());
  }
}
