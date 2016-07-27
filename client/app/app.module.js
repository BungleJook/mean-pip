angular.module('angularPip', [
    'ui.router',
    'ui.bootstrap',
    'core',
    'postList',
    'postDetail',
    'postTitleList'])
    .config(['$locationProvider', '$urlRouterProvider',
        function config($locationProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');

            $urlRouterProvider
                .otherwise('/posts');
        }
    ]);