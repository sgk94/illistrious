var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema ({
    requester: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    recipient: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    status: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Friend', friendSchema);