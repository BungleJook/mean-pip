angular.module('postAdd', ['ui.router', 'core.post'])
    .config(['$locationProvider', '$stateProvider',
        function config($locationProvider, $stateProvider) {
            $locationProvider.hashPrefix('!');

            $stateProvider
                .state('post-add', {
                    url: '/post/add',
                    template: '<post-add></post-add>'
                });
        }
    ]);