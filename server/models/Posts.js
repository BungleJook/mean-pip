var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    id_name: String,
    title: String,
    text: String,
    date_created: Date,
    date_modified: Date,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);