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
      name: 'dashboard',
      url: '/dashboard',
      component: 'storyDashboard',
      authenticate: true,
    }, {
      name: 'info',
      url: '/info/:page',
      component: 'infoPage',
    }, {
      name: 'editStory',
      url: '/edit/story/:_id',
      component: 'storyEditor',
      authenticate: true,
    }, {
      name: 'story',
      url: '/story/:_id',
      component: 'storyContent',
      resolve: {
        story: ($stateParams, stories) => {
          'ngInject';

          return stories.read($stateParams._id);
        }
      }
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
