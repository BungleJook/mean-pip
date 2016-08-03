angular.module('postDetail', ['ui.router', 'core.post'])
    .config(['$locationProvider', '$stateProvider',
        function config($locationProvider, $stateProvider) {
            $locationProvider.hashPrefix('!');

            $stateProvider
                .state('post-detail', {
                    url: '/posts/{postId}',
                    template: '<post-detail></post-detail>'
                });
        }
    ]);