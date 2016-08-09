var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* MongoDB */
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// autoload objects by id (if possible)
router.param('post', function(req, res, next, id) {
    var query = Post.findById(id);

    query.exec(function(err, post) {
        if (err) { return next(err); }
        if (!post) { return next(new Error('can\'t find post')); }

        req.post = post;
        return next();
    });
});

router.param('comment', function(req, res, next, id) {
    var query = Comment.findById(id);

    query.exec(function(err, comment) {
        if (err) { return next(err); }
        if (!comment) { return next(new Error('can\'t find comment')); }

        req.comment = comment;
        return next();
    });
});

// POSTS //
// get all posts
router.get('/posts', function(req, res, next) {
    Post.find(function(err, posts) {
        if (err) { return next(err); }

        res.json(posts);
    });
});

// get post by id
router.get('/posts/:post', function(req, res, next) {
    req.post.populate('comments', function(err, post) {
        if (err) { return next(err); }

        res.json(post);
    });
});

// post new post
router.post('/posts', function(req, res, next) {
    var post = new Post(req.body);

    post.save(function(err, post) {
        if (err) { return next(err); }

        res.json(post);
    });
});

// delete post by id
router.delete('/posts/:post', function(req, res, next) {
    Post.remove({_id: req.params.post}, function(err, post) {
        if (err) {
            return next(err);
        }
        res.send('DELETED');
    });
});

// COMMENTS
// get comment by id
router.get('/posts/:post/comments/:comment', function(req, res) {
    res.json(req.comment);
});

// post new comment
router.post('/posts/:post/comments', function(req, res, next) {
    var comment = new Comment(req.body);
    comment.post = req.post;

    comment.save(function(err, comment) {
        if(err) { return next(err); }

        req.post.comments.push(comment);
        req.post.save(function(err, post) {
            if(err) { return next(err); }

            res.json(comment);
        });
    });
});

// put upvote on comment
router.put('/posts/:post/comments/:comment/upvote', function(req, res, next) {
    req.comment.upvote(function(err, comment) {
        if (err) { return next(err); }

        res.json(comment);
    });
});

/* end */

module.exports = router;