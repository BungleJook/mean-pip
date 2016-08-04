angular
    .module('postAdd')
    .component('postAdd', {
        templateUrl: 'app/post-add/post-add.template.html',
        controller: ['Post', 
            function PostAddController(Post) {
                var self = this;

                self.addPost = function() {
                    self.post = new Post();

                    self.post.title = self.title;
                    self.post.text = self.text;

                    Post.save(self.post, function() {
                        console.log("Saved!");
                    });
                }
            }
        ]
    });