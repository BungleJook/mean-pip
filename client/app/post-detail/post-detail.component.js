angular
    .module('postDetail')
    .component('postDetail', {
        templateUrl: 'app/post-detail/post-detail.template.html',
        controller: ['Post', '$stateParams',
            function PostDetailController(Post, $stateParams) {
                var self = this;

                self.post = Post.get({postId: $stateParams.postId});
            }
        ]
    })