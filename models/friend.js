var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema ({
    requester: {type: mongoose.Schema.Types.ObjectId, ref:'Friend'},
    recipient: {type: mongoose.Schema.Types.ObjectId, ref:'Friend'},
    status: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Friend', friendSchema);