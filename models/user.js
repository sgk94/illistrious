var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    avatar: String,
    friends: [String]

}, {
    timestamps: true
});

module.exports= mongoose.model('User', userSchema);

