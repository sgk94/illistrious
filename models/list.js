var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema ({
    link: String
});

var listSchema = new mongoose.Schema ({
    listname: String,
    links: [linkSchema],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'List'}
});

module.exports = mongoose.model('List', listSchema);