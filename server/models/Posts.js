var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    id_name: String,
    title: String,
    text: String,
    date_created: { type: Date, default: Date.now },
    date_modified: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);