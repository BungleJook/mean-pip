angular
    .module('postDetail')
    .component('postDetail', {
        templateUrl: 'app/post-detail/post-detail.template.html',
        controller: ['Post', '$stateParams',
            function PostDetailController(Post, $stateParams) {
                var self = this;

                Post.query().$promise.then(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i]["id"] == $stateParams.id) {
                            self.post = data[i];
                            break;
                        }
                    }
                });
            }
        ]
    })