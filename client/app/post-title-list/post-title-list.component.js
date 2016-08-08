angular
    .module('postTitleList')
    .component('postTitleList', {
        templateUrl: 'app/post-title-list/post-title-list.template.html',
        controller: ['Post', '$scope',
            function PostTitleListController(Post, $scope) {
                var self = this;

                self.posts = Post.query();

                // Query for new posts via service (called by separate controller)
                $scope.$on('posts-updated', function(event, data) {
                    self.posts = Post.query();
                });
            }
        ]
    });