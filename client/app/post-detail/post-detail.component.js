angular
    .module('postDetail')
    .component('postDetail', {
        templateUrl: 'app/post-detail/post-detail.template.html',
        controller: ['Post', 'BroadcastService', '$stateParams', '$location',
            function PostDetailController(Post, BroadcastService, $stateParams, $location) {
                var self = this;

                self.post = Post.get({postId: $stateParams.postId});

                self.deletePost = function() {
                    self.post.$delete({ postId: $stateParams.postId }, function() {
                        BroadcastService.broadcast('posts-updated');
                        $location.url('/');
                    });
                }
            }
        ]
    });