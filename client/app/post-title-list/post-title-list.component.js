angular
    .module('postTitleList')
    .component('postTitleList', {
        templateUrl: 'app/post-title-list/post-title-list.template.html',
        controller: ['Post', 
            function PostTitleListController(Post) {
                var self = this;

                self.posts = Post.query();
            }
        ]
    });