import ng from 'angular';

export default ng.module('app.routes', [])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
    const states = [{
      name: 'home',
      url: '/',
      component: 'mainFeed',
    }, {
      name: 'newsroom',
      url: '/newsroom',
      component: 'storyGrid',
      authenticate: true,
    }, {
      name: 'info',
      url: '/info/:page',
      component: 'infoPage',
    }, {
      name: 'createStory',
      url: '/story',
      component: 'story',
      authenticate: true,
    }, {
      name: 'story',
      url: '/story/:_id',
      component: 'story',
    }, {
      name: 'register',
      url: '/register',
      component: 'registerForm',
    }, {
      name: 'login',
      url: '/login',
      component: 'loginForm',
    }, {
      name: 'logout',
      url: '/',
      component: 'story',
      authenticate: true,
    },
    ];
    states.forEach(state => $stateProvider.state(state));
  }).name;
