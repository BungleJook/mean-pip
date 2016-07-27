angular.module('postList', ['ui.router', 'core.post'])
    .config(['$locationProvider', '$stateProvider',
        function config($locationProvider, $stateProvider) {
            $locationProvider.hashPrefix('!');

            $stateProvider
                .state('post-list', {
                    url: '/posts',
                    template: "<post-list></post-list>"
                });
        }
    ]);