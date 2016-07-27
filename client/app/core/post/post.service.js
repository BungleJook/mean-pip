angular
    .module('core.post')
        .factory('Post', ['$resource',
        function($resource) {
            return $resource('assets/data/posts/posts.json');
        }   
    ]);