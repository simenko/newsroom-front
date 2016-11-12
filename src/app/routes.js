import ng from 'angular';

export default ng.module('app.routes', [])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    const states = [{
      name: 'home',
      url: '/',
      component: 'story', // TODO: main page
    }, {
      name: 'newsroom',
      url: '/newsroom',
      component: 'storyGrid',
    }, {
      name: 'info',
      url: '/info/:page',
      component: 'infoPage',
    }, {
      name: 'createStory',
      url: '/story',
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
    },
    ];
    states.forEach(state => $stateProvider.state(state));
  }).name;
