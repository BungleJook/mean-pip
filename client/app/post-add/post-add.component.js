angular
    .module('postAdd')
    .component('postAdd', {
        templateUrl: 'app/post-add/post-add.template.html',
        controller: ['Post', 'BroadcastService', 
            function PostAddController(Post, BroadcastService) {
                var self = this;

                self.addPost = function() {
                    self.post = new Post();

                    self.post.title = self.title;
                    self.post.text = self.text;

                    self.post.$save(self.post, function() {
                        BroadcastService.broadcast('posts-updated');
                    });

                    self.title = "";
                    self.text = "";
                }
            }
        ]
    });