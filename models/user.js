var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    // friend: [friendSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports= mongoose.model('User', userSchema);

